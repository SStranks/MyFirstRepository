import Invoice from '#Models/invoiceModel';
import User from '#Models/userModel';
import catchAsync from '#Utils/catchAsync';
import { NextFunction, Request, Response } from 'express';

const getAllInvoices = catchAsync(
  async (request: Request, response: Response, next: NextFunction) => {
    const invoices = await Invoice.find({}).populate({
      path: 'senderAddress',
      model: User,
      select: 'address',
      transform: (doc) => doc.address,
    });
    response.json(invoices);
  }
);

// eslint-disable-next-line import/prefer-default-export
export { getAllInvoices };
