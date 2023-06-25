import mongoose from 'mongoose';

interface IAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

const addressSchema = new mongoose.Schema<IAddress>(
  {
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
  },
  {
    id: false,
  }
);

export { IAddress, addressSchema };
