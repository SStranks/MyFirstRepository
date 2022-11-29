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

const Task = mongoose.model<TTask>('Task', taskSchema);

export { Task, taskSchema, TTask };
