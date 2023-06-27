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
    const request = await RequestModel.create(req.body);

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

export {
  createRequest,
  deleteRequest,
  getAllRequests,
  getRequest,
  updateRequest,
};
