/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';

interface IRequest {
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: mongoose.Types.ObjectId[];
}

const requestSchema = new mongoose.Schema<IRequest>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: [75, 'Title can be no longer than 75 characters'],
    },
    category: {
      type: String,
      enum: ['ui', 'ux', 'enhancement', 'bug', 'feature'],
      required: true,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['suggestion', 'planned', 'in-progress', 'live'],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: [250, 'Description can be no longer than 250 characters'],
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

requestSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

const Request = mongoose.model('Request', requestSchema);

export default Request;
