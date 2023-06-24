import mongoose from 'mongoose';
import validator from 'validator';

// NOTE:  Make invoice.total virtual?
// NOTE:  Make client address linked to user documents

interface IAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

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
  total: number;
}

const addressSchema = new mongoose.Schema<IAddress>({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const itemSchema = new mongoose.Schema<IItem>({
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
  total: {
    type: Number,
    required: true,
    min: [0, 'Price must be a positive number'],
  },
});

const invoiceSchema = new mongoose.Schema<IInvoice>({
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
    type: addressSchema,
    required: true,
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
  total: {
    type: Number,
    required: true,
  },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

export default Invoice;
