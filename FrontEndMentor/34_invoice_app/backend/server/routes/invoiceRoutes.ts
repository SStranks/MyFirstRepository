import { getAllInvoices } from '#Controllers/invoiceController';
import express from 'express';

const invoiceRouter = express.Router();

invoiceRouter.route('/').get(getAllInvoices);

export default invoiceRouter;
