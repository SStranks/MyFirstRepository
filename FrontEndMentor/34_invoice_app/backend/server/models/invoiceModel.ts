/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
/* eslint-disable unicorn/no-array-reduce */
import formatDate from '#Utils/formatDate';
import mongoose from 'mongoose';
import { customAlphabet } from 'nanoid';
import validator from 'validator';
import { IAddress, addressSchema } from './addressSchema';

interface IItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface IInvoice {
  slug: string;
  createdAt: () => string;
  paymentDue: () => string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: IAddress;
  clientAddress: IAddress;
  items: IItem[];
  total: number;
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

// Convert Date to dd/month(mmm)/yyyy
function convertDate(date: Date) {
  return formatDate(date);
}

const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);

// ------------------------------------------------------------------- //
// ------------------------     SCHEMA     --------------------------- //
// ------------------------------------------------------------------- //

const invoiceSchema = new mongoose.Schema<IInvoice>(
  {
    slug: {
      type: String,
      default: nanoid(),
      immutable: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: convertDate,
    },
    paymentDue: {
      type: Date,
      default: () => {
        const date = new Date();
        date.setDate(date.getDate() + 30);
        return date;
      },
      get: convertDate,
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
      enum: [1, 7, 14, 30],
      default: 30,
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
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true },
  }
);

invoiceSchema.virtual('total').get(function () {
  return this.items.reduce((acc, cur) => {
    return acc + cur.total;
  }, 0);
});

invoiceSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

export default Invoice;
