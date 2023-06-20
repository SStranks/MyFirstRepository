import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A username is required"]
  },
  email: {
    type: String,
    require: [true, "An email address is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'A valid email address is required'] 
  },
  photo: {
    type: String,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  upvotes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

const User = mongoose.model('User', userSchema);

export default User;