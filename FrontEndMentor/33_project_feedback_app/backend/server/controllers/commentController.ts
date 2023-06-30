/* eslint-disable no-underscore-dangle */
import { Comment } from '#Models/CommentModel';
import RequestModel from '#Models/RequestModel';
import AppError from '#Utils/appError';
import catchAsync from '#Utils/catchAsync';
import catchAsyncTransaction from '#Utils/catchAsyncTransaction';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

const createComment = catchAsync(async (req, res, next) => {
  // If requestID is specified on req.query then new comment is a root commment.
  // If comentID is specified on req.query then new comment is a reply to another comment.
  const { request: requestId, comment: commentId } = req.query;

  if (requestId) {
    // Find request document; add the new comment ID to request document comment[].
    const comment = await catchAsyncTransaction(
      // eslint-disable-next-line no-shadow
      async (req, res, next, session) => {
        const commentDoc = await Comment.create([req.body], { session });

        const updateField = { $push: { comments: commentDoc[0]._id } };
        await RequestModel.findByIdAndUpdate(requestId, updateField, {
          session,
        });

        return commentDoc;
      }
    )(req, res, next);

    return res.status(201).json({
      status: 'success',
      data: {
        data: comment,
      },
    });
  }

  if (commentId) {
    // Find comment document; copy comment.parents[] and merge it with new comment properties.
    const comment = await catchAsyncTransaction(
      // eslint-disable-next-line no-shadow
      async (req, res, next, session) => {
        const commentParent = await Comment.findById(commentId, undefined, {
          session,
        });

        let parents;
        if (commentParent) {
          ({ parents } = commentParent);
        } else {
          return next(new AppError('Could not find comment with that ID', 404));
        }

        const newObjId = new mongoose.Types.ObjectId();
        parents.push(newObjId);
        const commentFields = { ...req.body, _id: newObjId, parents };
        const commentDoc = await Comment.create([commentFields], { session });
        return commentDoc;
      }
    )(req, res, next);

    return res.status(201).json({
      status: 'success',
      data: {
        data: comment,
      },
    });
  }

  return next(new AppError('Query parameters were expected', 404));
});

const updateComment = catchAsync(async (req, res, next) => {
  const { content } = req.body;
  const comment = await Comment.findByIdAndUpdate(
    req.params.id,
    { content },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!comment)
    return next(new AppError('Could not find document with that ID', 404));

  return res.status(200).json({
    status: 'success',
    data: {
      data: comment,
    },
  });
});

export { createComment, updateComment };
