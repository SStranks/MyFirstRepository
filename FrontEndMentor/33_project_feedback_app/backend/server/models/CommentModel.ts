import { Document, Schema, Types, model } from 'mongoose';

export interface ICommentPopulateUser {
  user: { username: string; user: string; photo: string };
}

export interface IComment extends Document {
  user: Types.ObjectId;
  content: string;
  requestId: string;
  parents: Types.ObjectId[];
  created: Date;
}

export interface ICommentHydrated
  extends Omit<IComment, 'user'>,
    ICommentPopulateUser {
  _id: Types.ObjectId;
  replyingTo?: string;
  replies?: unknown[];
}

const commentSchema = new Schema<IComment>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      trim: true,
      minlength: [2, 'Comment must be longer than 2 characters'],
      maxlength: [500, 'Comment can be no longer than 500 characters'],
    },
    requestId: {
      type: String,
      required: true,
    },
    parents: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    created: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

// If Root comment; top parent id should be this._id
commentSchema.pre('save', function (next) {
  if (this.parents.length === 0) this.parents.push(this._id);
  next();
});

commentSchema.virtual('replies');
commentSchema.virtual('replyingTo');

const Comment = model<IComment>('Comment', commentSchema);

export default Comment;
