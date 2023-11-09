// import type { ITask, ISubTask } from '../../../shared/types.d.ts';
import type { ITask, ISubTask } from '#Shared/types.d.ts';
// import type { ITask, ISubTask } from '../types.ts'; // NOTE:  Works
import mongoose, { Model } from 'mongoose';

interface ITaskDocumentOverrides {
  subtasks: ISubTask[];
}

type TTaskModel = Model<ITask, {}, ITaskDocumentOverrides>;

const subtaskSchema = new mongoose.Schema<ISubTask>({
  title: {
    type: 'String',
    maxLength: 100,
    required: true,
    trim: true,
  },
  isCompleted: { type: 'Boolean', required: true, default: false },
});

const taskSchema = new mongoose.Schema<ITask, TTaskModel>({
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

const Task = mongoose.model<ITask>('Task', taskSchema);

export { Task, TTaskModel, taskSchema };
