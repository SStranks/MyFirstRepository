import mongoose from 'mongoose';

const subtaskSchema = new mongoose.Schema({
  subtaskId: { type: 'String', require: true, unique: true },
  name: {
    type: 'String',
    maxLength: 30,
    required: true,
    unique: true,
    trim: true,
  },
  isCompleted: { type: 'Boolean', required: true },
});

const taskSchema = new mongoose.Schema({
  taskId: { type: 'String', required: true, unique: true },
  name: {
    type: 'String',
    maxLength: 30,
    required: true,
    unique: true,
    trim: true,
  },
  description: { type: 'String', maxLength: 280, trim: true },
  status: { type: 'String', required: true },
  subtasks: [subtaskSchema],
});

const columnSchema = new mongoose.Schema({
  columnId: { type: 'String', required: true, unique: true },
  name: {
    type: 'String',
    maxLength: 30,
    required: true,
    unique: true,
    trim: true,
  },
  tasks: [taskSchema],
});

const boardSchema = new mongoose.Schema({
  boardId: { type: 'String', required: true, unique: true },
  name: {
    type: 'String',
    maxLength: 30,
    required: true,
    unique: true,
    trim: true,
  },
  columns: [columnSchema],
});

const Board = mongoose.model('Board', boardSchema);

export default Board;
