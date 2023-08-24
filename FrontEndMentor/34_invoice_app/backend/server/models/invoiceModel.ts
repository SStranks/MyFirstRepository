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
  createdAt: Date;
  paymentDue: string;
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
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        const { _id, ...rest } = ret;
        return rest;
      },
    },
    toObject: { virtuals: true },
  }
);

itemSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

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
      set: (str: string) => {
        const dateParts = str.split('/');
        const newDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
        return new Date(newDate);
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
    // TODO:  After creating sign-up functionality; have option when creating/updating invoice to use the default user address or add a new one.
    // senderAddress: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    // },
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
    toJSON: {
      virtuals: true,
      getters: true,
      transform: (doc, ret) => {
        const { createdAt: createdAtOld, ...rest } = ret;
        const createdAt = convertDate(createdAtOld);
        return { createdAt, ...rest };
      },
    },
    toObject: { virtuals: true },
  }
);

invoiceSchema.virtual('paymentDue').get(function () {
  const { createdAt, paymentTerms } = this;
  const newDate = convertDate(
    new Date(createdAt.setDate(createdAt.getDate() + paymentTerms))
  );
  return newDate;
});

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
