import type { TTask, TSubTask } from '#Shared/types';
import mongoose, { Model, Types } from 'mongoose';

interface ITaskDocumentProps {
  subtasks: Types.DocumentArray<TSubTask>;
}

type TTaskModelType = Model<TTask, {}, ITaskDocumentProps>;

const subtaskSchema = new mongoose.Schema<TSubTask>({
  title: {
    type: 'String',
    maxLength: 100,
    required: true,
    trim: true,
  },
  isCompleted: { type: 'Boolean', required: true, default: false },
});

const taskSchema = new mongoose.Schema<TTask, TTaskModelType>({
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

export { Task, TTaskModelType, taskSchema };
