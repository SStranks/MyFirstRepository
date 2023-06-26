import Invoice from '#Models/invoiceModel';
import User from '#Models/userModel';
import AppError from '#Utils/appError';
import catchAsync from '#Utils/catchAsync';
import { NextFunction, Request, Response } from 'express';

const getAllInvoices = catchAsync(
  // NOTE:  'total' is a virtual; requires 'items', which are then removed from return data
  async (req: Request, res: Response, next: NextFunction) => {
    const invoices = await Invoice.find(
      {},
      'createdAt clientName items total status'
    ).transform((docs) => {
      return docs.map((doc) => {
        const { _id, createdAt, clientName, total, status } = doc;
        return { _id, createdAt, clientName, total, status };
      });
    });

    if (!invoices)
      return next(new AppError('No documents for current user', 404));

    return res.status(200).json({
      status: 'success',
      results: invoices.length,
      data: {
        data: invoices,
      },
    });
  }
);

const getInvoice = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const invoice = await Invoice.findById(req.params.id).populate({
      path: 'senderAddress',
      model: User,
      select: 'address',
      transform: (doc) => doc.address,
    });

    if (!invoice)
      return next(new AppError('No document found with that ID', 404));

    return res.status(200).json({
      status: 'success',
      data: {
        data: invoice,
      },
    });
  }
);

const createInvoice = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const invoice = await Invoice.create(req.body);

    return res.status(201).json({
      status: 'success',
      data: {
        data: invoice,
      },
    });
  }
);

const updateInvoice = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!invoice)
      return next(new AppError('No document found with that ID', 404));

    return res.status(200).json({
      status: 'success',
      data: {
        data: invoice,
      },
    });
  }
);

const deleteInvoice = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const invoice = await Invoice.findByIdAndDelete(req.params.id);

    if (!invoice)
      return next(new AppError('No document found with that ID', 404));

    return res.status(204).json({
      status: 'success',
      data: undefined,
    });
  }
);

export {
  createInvoice,
  deleteInvoice,
  getAllInvoices,
  getInvoice,
  updateInvoice,
};
