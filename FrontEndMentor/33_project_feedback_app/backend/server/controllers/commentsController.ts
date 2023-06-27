import { mongooseConnection } from '#Config/db';
import { Comment, IComment } from '#Models/CommentModel';
import RequestModel from '#Models/RequestModel';
import AppError from '#Utils/appError';
import catchAsync from '#Utils/catchAsync';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

const createComment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // NOTE:  If param query is 'request' then add comment ID to request 'comments' array, as it is a root comment. If param query is 'comment', then it is a reply to another comment.
    // NOTE:  Need to add 'parents' functionality in here. If param has queryID (parent comment), grab that parent comment 'parents' array and copy to this created document 'parents', then push new comment ID to its parent array. If it is a root comment then just push its ID to its parents array.
    const reqBody = { ...req.body };
    const { requestId, commentId } = req.query;
    let comment;

    if (requestId) {
      // Find request and add the new comment ID to its comment array.

      const session = await mongooseConnection.startSession();
      await session.withTransaction(async () => {
        comment = await Comment.create([req.body], { session });

        // eslint-disable-next-line no-underscore-dangle
        const updateField = { $push: { comments: comment._id } };
        const request = await RequestModel.findByIdAndUpdate(
          requestId,
          updateField,
          { session }
        );
      });

      session.endSession();
    }

    if (commentId) {
      // Get responded to comments parent array
      // Copy that array in req.body.parents;
      const session = await mongooseConnection.startSession();
      await session.withTransaction(async () => {
        const commentParent = await Comment.findById(commentId, { session });

        if (!commentParent)
          next(new AppError('Could not find comment with that ID', 404));

        const { parents } = commentParent;
        const newObjId = new mongoose.Types.ObjectId();
        parents.push(newObjId);
        const commentFields = { ...req.body, _id: newObjId, parents };
        comment = await Comment.create([commentFields], { session });

        session.endSession();
      });
    }

    return res.status(201).json({
      status: 'success',
      data: {
        data: comment,
      },
    });
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
