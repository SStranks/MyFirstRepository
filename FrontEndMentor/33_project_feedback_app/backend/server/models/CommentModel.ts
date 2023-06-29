import mongoose, { Document } from 'mongoose';

interface IComment extends Document {
  user: mongoose.Types.ObjectId;
  content: string;
  parents: mongoose.Types.ObjectId[];
  created: Date;
}

const commentSchema = new mongoose.Schema<IComment>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    trim: true,
    minlength: [2, 'Comment must be longer than 2 characters'],
    maxlength: [500, 'Comment can be no longer than 500 characters'],
  },
  parents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  created: {
    type: Date,
    default: Date.now(),
  },
});

const Comment = mongoose.model<IComment>('Comment', commentSchema);

export { Comment, IComment };
