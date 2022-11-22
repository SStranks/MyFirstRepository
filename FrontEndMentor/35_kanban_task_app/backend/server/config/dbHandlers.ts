import AppError from '#Utils/appError';
import catchAsync from '#Utils/catchAsync';
import { Model } from 'mongoose';

const getAll = <T>(Model: Model<T>) =>
  catchAsync(async (req, res, next) => {
    const docs = await Model.find({});

    if (!docs) return next(new AppError('No documents found in DB!', 404));

    res.status(200).json({
      status: 'success',
      results: docs.length,
      data: {
        data: docs,
      },
    });
  });

export { getAll };
