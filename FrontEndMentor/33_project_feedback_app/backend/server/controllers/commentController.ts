import { mongooseConnection } from '#Config/db';
import { Comment, IComment } from '#Models/CommentModel';
import RequestModel from '#Models/RequestModel';
import AppError from '#Utils/appError';
import catchAsync from '#Utils/catchAsync';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

// const createComment = catchAsync(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const comment = await Comment.create(req.body);

//     if (!comment) next(new AppError('Could not create document', 404));

//     return res.status(201).json({
//       status: 'success',
//       data: {
//         data: comment,
//       },
//     });
//   }
// );

const createComment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // NOTE:  If param query is 'request' then add comment ID to request 'comments' array, as it is a root comment. If param query is 'comment', then it is a reply to another comment.
    // NOTE:  Need to add 'parents' functionality in here. If param has queryID (parent comment), grab that parent comment 'parents' array and copy to this created document 'parents', then push new comment ID to its parent array. If it is a root comment then just push its ID to its parents array.

    // If requestID is specified on req.query then new comment is a root commment.
    // If comentID is specified on req.query then new comment is a reply to another comment.
    const { request: requestId, comment: commentId } = req.query;
    let comment;

    if (requestId) {
      // Find request document; add the new comment ID to request document comment[].

      const session = await mongooseConnection.startSession();
      await session.withTransaction(async () => {
        console.log('COMMENT CONTROLLER: TRANSACTION', req.body);
        comment = await Comment.create([req.body], { session });

        // eslint-disable-next-line no-underscore-dangle
        const updateField = { $push: { comments: comment[0]._id } };
        await RequestModel.findByIdAndUpdate(requestId, updateField, {
          session,
        });
      });

      session.endSession();

      return res.status(201).json({
        status: 'success',
        data: {
          data: comment,
        },
      });
    }

    if (commentId) {
      // Find comment document; copy comment.parents[] and merge it with new comment properties.
      const session = await mongooseConnection.startSession();
      await session.withTransaction(async () => {
        const commentParent = await Comment.findById(commentId, { session });

        let parents;
        if (commentParent) {
          ({ parents } = commentParent);
        } else {
          return next(new AppError('Could not find comment with that ID', 404));
        }

        const newObjId = new mongoose.Types.ObjectId();
        parents.push(newObjId);
        const commentFields = { ...req.body, _id: newObjId, parents };
        comment = await Comment.create([commentFields], { session });

        session.endSession();

        return res.status(201).json({
          status: 'success',
          data: {
            data: comment,
          },
        });
      });
    }

    return next(new AppError('Query parameters were expected', 404));
  }
);

const updateComment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!comment)
      return next(new AppError('Could not find document with that ID', 404));

    return res.status(200).json({
      status: 'success',
      data: {
        data: comment,
      },
    });
  }
);

export { createComment, updateComment };
