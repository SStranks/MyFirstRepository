import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    trim: true,
    minlength: [2, 'Comment must be longer than 2 characters'],
    maxlength: [500, 'Comment can be no longer than 500 characters']
  },
  parents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  created: {
    type: Date,
    default: Date.now(),
  }
});

const Comment = mongoose.model('Comment', commentSchema)

export default Comment;