import { IAddress, addressSchema } from '#Models/addressSchema';
import mongoose from 'mongoose';
import validator from 'validator';

interface IUser {
  username: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  address: IAddress;
  invoices: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: [true, 'A name is required'],
  },
  email: {
    type: String,
    require: [true, 'An email address is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'A valid email address is required'],
  },
  photo: {
    type: String,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  address: {
    type: addressSchema,
    required: true,
  },
  invoices: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Invoice',
    },
  ],
});

const User = mongoose.model('User', userSchema);

export default User;
