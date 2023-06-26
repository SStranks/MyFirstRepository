import {
  createInvoice,
  deleteInvoice,
  getAllInvoices,
  getInvoice,
  updateInvoice,
} from '#Controllers/invoiceController';
import express from 'express';

const invoiceRouter = express.Router();

invoiceRouter.route('/').get(getAllInvoices).post(createInvoice);

invoiceRouter
  .route('/:id')
  .get(getInvoice)
  .patch(updateInvoice)
  .delete(deleteInvoice);

export default invoiceRouter;
