import { Comment as CommentModel } from '#Models/CommentModel';
import RequestModel from '#Models/RequestModel';
import UserModel from '#Models/UserModel';
import AppError from '#Utils/appError';
import catchAsync from '#Utils/catchAsync';
import catchAsyncTransaction from '#Utils/catchAsyncTransaction';
import { NextFunction, Request, Response } from 'express';

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

const getAllRequestComments = catchAsync(async (req, res, next) => {
  const requestId = req.params.id;
  const comments = await CommentModel.find({ requestId });

  // TODO:  Currently fetched all comments on a request. Now need to sort according to parents.length and build up a nested replies object to send back to client (which can then be parsed).

  if (!comments)
    return next(new AppError('No document found with that ID', 404));

  return res.status(200).json({
    status: 'success',
    data: {
      comments,
    },
  });
});

const updateRequestUpvote = catchAsync(async (req, res, next) => {
  const { id: requestId } = req.params;
  const { userId } = req.query;

  const request = await catchAsyncTransaction(
    // eslint-disable-next-line no-shadow
    async (req, res, next, session) => {
      const userDoc = await UserModel.findById(userId, undefined, { session });

      if (!userDoc)
        throw new AppError('Could not find comment with that ID', 404);

      const { upvotes } = userDoc;

      if (upvotes.some((el) => el.toString() === requestId))
        throw new AppError('Duplicate upvote', 404);

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
