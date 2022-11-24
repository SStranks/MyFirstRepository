import mongoose from 'mongoose';

type TSubtask = {
  title: string;
  isCompleted: boolean;
};

type TTask = {
  title: string;
  description: string;
  status: string;
  subtasks: TSubtask[];
};

type TColumn = {
  name: string;
  tasks: TTask[];
};

type TBoard = {
  name: string;
  columns: TColumn[];
};

const subtaskSchema = new mongoose.Schema({
  title: {
    type: 'String',
    maxLength: 100,
    required: true,
    trim: true,
  },
  isCompleted: { type: 'Boolean', required: true },
});

const taskSchema = new mongoose.Schema({
  title: {
    type: 'String',
    maxLength: 100,
    required: true,
    trim: true,
  },
  description: { type: 'String', maxLength: 280, trim: true },
  status: { type: 'String', required: true },
  subtasks: [{ type: subtaskSchema, required: false }],
});

const columnSchema = new mongoose.Schema({
  name: {
    type: 'String',
    maxLength: 30,
    required: true,
    trim: true,
  },
  tasks: [{ type: taskSchema, required: false }],
});

const boardSchema = new mongoose.Schema<TBoard>({
  name: {
    type: 'String',
    maxLength: 30,
    required: true,
    trim: true,
  },
  columns: [{ type: columnSchema, required: false }],
});

const Board = mongoose.model<TBoard>('Board', boardSchema);

export { Board, TBoard };
