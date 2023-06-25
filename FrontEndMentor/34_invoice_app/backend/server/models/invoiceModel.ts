/* eslint-disable func-names */
/* eslint-disable unicorn/no-array-reduce */
import mongoose from 'mongoose';
import validator from 'validator';
import { IAddress, addressSchema } from './addressSchema';

interface IItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface IInvoice {
  createdAt: Date;
  paymentDue: Date;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: IAddress;
  clientAddress: IAddress;
  items: IItem[];
}

const itemSchema = new mongoose.Schema<IItem>(
  {
    name: {
      type: String,
      required: true,
      maxlength: [100, 'Item name can be no longer than 100 characters'],
    },
    quantity: {
      type: Number,
      requried: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price must be a positive number'],
    },
  },
  {
    id: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

itemSchema.virtual('total').get(function () {
  return this.quantity * this.price;
});

const invoiceSchema = new mongoose.Schema<IInvoice>(
  {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    paymentDue: {
      type: Date,
      default: () => {
        const date = new Date();
        date.setDate(date.getDate() + 30);
        return date;
      },
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: [100, 'Description can be no longer than 100 characters'],
    },
    paymentTerms: {
      type: Number,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    clientEmail: {
      type: String,
      required: true,
      validate: [validator.isEmail, 'Email must be a valid email address'],
    },
    status: {
      type: String,
      required: true,
      enum: ['paid', 'pending', 'draft'],
      default: 'draft',
    },
    senderAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    clientAddress: {
      type: addressSchema,
      required: true,
    },
    items: [
      {
        type: itemSchema,
      },
    ],
  },
  {
    id: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

invoiceSchema.virtual('total').get(function () {
  return this.items.reduce((acc, cur) => {
    return acc + cur.total;
  }, 0);
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

export default Invoice;
