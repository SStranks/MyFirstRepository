import { Comment as CommentModel } from '#Models/CommentModel';
import RequestModel from '#Models/RequestModel';
import AppError from '#Utils/appError';
import catchAsync from '#Utils/catchAsync';
import { NextFunction, Request, Response } from 'express';

const getAllRequests = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const requests = await RequestModel.find({});

    if (!requests) return next(new AppError('No documents found', 404));

    return res.status(200).json({
      status: 'success',
      results: requests.length,
      data: {
        data: requests,
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
        data: request,
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
        data: request,
      },
    });
  }
);

const updateRequest = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const request = await RequestModel.findByIdAndUpdate(
      req.params.id,
      req.body,
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
        data: request,
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
      data: comments,
    },
  });
});

export {
  createRequest,
  deleteRequest,
  getAllRequestComments,
  getAllRequests,
  getRequest,
  updateRequest,
};
