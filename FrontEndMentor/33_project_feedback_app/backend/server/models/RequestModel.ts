import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [75, 'Title can be no longer than 75 characters ']
  },
  category: {
    type: String,
    enum: ['UI', 'UX', 'Enhancement', 'Bug', 'Feature'],
    required: true,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['Planned', 'In-Progress', 'Live']
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: [250, 'Description can be no longer than 250 characters']
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
});

const Request = mongoose.model('Request', requestSchema);

export default Request;