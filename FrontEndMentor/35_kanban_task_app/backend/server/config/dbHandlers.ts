import AppError from '#Utils/appError';
import catchAsync from '#Utils/catchAsync';
import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';

const getAll = <T>(Model: Model<T>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const docs = await Model.find({});

    if (!docs) return next(new AppError('No documents found in DB!', 404));

    res.status(200).json({
      status: 'success',
      results: docs.length,
      data: {
        boards: docs,
      },
    });
  });

const createOne = <T>(Model: Model<T>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Model.create(req.body);

    if (!doc) return next(new AppError('Failed to create document', 404));

    res.status(201).json({
      status: 'success',
      results: 1,
      data: {
        boards: doc,
      },
    });
  });

const deleteOne = <T>(Model: Model<T>) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc)
      return next(new AppError('No document found with matching ID', 404));

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

export { getAll, createOne, deleteOne };
