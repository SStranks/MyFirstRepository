/* eslint-disable unicorn/no-array-reduce */
/* eslint-disable unicorn/prefer-object-from-entries */
/* eslint-disable unicorn/no-array-for-each */
/* eslint-disable no-underscore-dangle */
import CommentModel, {
  IComment,
  ICommentHydrated,
  ICommentPopulateUser,
} from '#Models/CommentModel';
import RequestModel from '#Models/RequestModel';
import UserModel from '#Models/UserModel';
import AppError from '#Utils/appError';
import catchAsync from '#Utils/catchAsync';
import catchAsyncTransaction from '#Utils/catchAsyncTransaction';
import { NextFunction, Request, Response } from 'express';
import { Types } from 'mongoose';

const getAllRequests = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const requests = await RequestModel.find({});

    if (!requests) return next(new AppError('No documents found', 404));

    return res.status(200).json({
      status: 'success',
      results: requests.length,
      data: {
        requests,
      },
    });
  }
);

const getRequest = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const request = await RequestModel.findById(req.params.id);

    if (!request)
      return next(new AppError('No document found with that ID', 404));

    return res.status(200).json({
      status: 'success',
      data: {
        request,
      },
    });
  }
);

const createRequest = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, category, description } = req.body;

    if (!title || !category || !description)
      throw new AppError('Invalid submission structure', 400);

    const request = await RequestModel.create({ title, category, description });

    if (!request) throw new AppError('Could not create document', 400);

    return res.status(201).json({
      status: 'success',
      data: {
        request,
      },
    });
  }
);

const updateRequest = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, category, status, description } = req.body;

    if (!title || !category || !status || !description)
      throw new AppError('Invalid submission structure', 400);

    const request = await RequestModel.findByIdAndUpdate(
      req.params.id,
      { title, category, status, description },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!request)
      return next(new AppError('No document found with that ID', 404));

    return res.status(200).json({
      status: 'success',
      data: {
        request,
      },
    });
  }
);

// TODO:  Need to delete all associated comments and find user upvotes and remove.
const deleteRequest = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const request = await RequestModel.findByIdAndDelete(req.params.id);

    if (!request)
      return next(new AppError('No document found with that ID', 404));

    return res.status(204).json({
      status: 'success',
      data: undefined,
    });
  }
);

// NOTE:  Could refactor this; responseCommentObject to array?
const getAllRequestComments = catchAsync(async (req, res, next) => {
  const requestId = req.params.id;
  const comments = await CommentModel.find(
    { requestId },
    ' -requestId -created -__v'
  ).populate<ICommentPopulateUser>('user', 'name username photo -_id');

  interface IResObj {
    [key: string]: ICommentHydrated[];
  }

  // Hashmap of all comments. Strucutre: commentid: {comment}
  const allComments: { [key: string]: ICommentHydrated } = comments.reduce(
    (acc, cur) => ({ ...acc, [cur._id]: cur }),
    {}
  );

  // Create object of arrays which hold all comments tied to a root comment
  const responseCommentsObject: IResObj = {};
  comments.forEach((el) => {
    const rootCommentId = el.parents[0].toString();
    if (!(rootCommentId in responseCommentsObject))
      responseCommentsObject[`${rootCommentId}`] = [];
    responseCommentsObject[`${rootCommentId}`].push(el);
  });

  // Sort each array so most deeply nested comments are first, root last
  Object.keys(responseCommentsObject).forEach((el) => {
    responseCommentsObject[`${el}`].sort((a, b) => {
      if (a.parents.length < b.parents.length) return 1;
      if (a.parents.length > b.parents.length) return -1;
      return 0;
    });
  });

  // Iterate over comments and build up the reply chain
  Object.keys(responseCommentsObject).forEach((el) => {
    responseCommentsObject[`${el}`].forEach((comment) => {
      // Ignore Root
      if (comment.parents.length > 1) {
        const parentId = comment.parents[comment.parents.length - 2];
        const parentComment = allComments[`${parentId}`];
        const { username: replyingTo } = parentComment.user;

        if (parentComment) {
          if (!parentComment.replies) {
            parentComment.replies = [];
          }
          const { user, content, replies, _id: id } = comment;
          parentComment.replies.push({
            user,
            content,
            replies,
            replyingTo,
            id,
          });
        }
      }
    });
  });

  // Return formatted root comments only
  const resComments = Object.keys(responseCommentsObject).map((el) => {
    const rootComment =
      responseCommentsObject[`${el}`][
        responseCommentsObject[`${el}`].length - 1
      ];
    const { user, content, replies, _id: id } = rootComment;
    return { user, content, replies, id };
  });

  if (!comments)
    return next(new AppError('No document found with that ID', 404));

  return res.status(200).json({
    status: 'success',
    results: comments.length,
    data: {
      resComments,
    },
  });
});

const updateRequestUpvote = catchAsync(async (req, res, next) => {
  const { id: requestId } = req.params;
  const { userId } = req.query;

  const request = await catchAsyncTransaction(
    async (req, res, next, session) => {
      const userDoc = await UserModel.findById(userId, undefined, { session });

      if (!userDoc)
        throw new AppError('Could not find comment with that ID', 404);

      const { upvotes } = userDoc;

      // If user has already voted on this request
      if (upvotes.some((el) => el.toString() === requestId)) {
        return res.status(200).json({
          status: 'success',
          data: { request: 'duplicate upvote' },
        });
      }

      const userDocUpdated = await UserModel.findByIdAndUpdate(
        userId,
        { $addToSet: { upvotes: requestId } },
        { session }
      );

      if (!userDoc) throw new AppError('Could not find user with that ID', 404);

      const requestDoc = await RequestModel.findByIdAndUpdate(
        requestId,
        { $inc: { upvotes: 1 } },
        { session, new: true }
      );

      return res.status(200).json({
        status: 'success',
        data: {
          request: requestDoc,
        },
      });
    }
  )(req, res, next);
});

export {
  createRequest,
  deleteRequest,
  getAllRequestComments,
  getAllRequests,
  getRequest,
  updateRequest,
  updateRequestUpvote,
};
