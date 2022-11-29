import { Task, taskSchema, TTask } from '#Models/taskModel';
import mongoose from 'mongoose';

type TColumn = {
  name: string;
  tasks: TTask[];
};

const columnSchema = new mongoose.Schema({
  name: {
    type: 'String',
    maxLength: 30,
    required: true,
    trim: true,
  },
  tasks: [{ type: taskSchema, required: false }],
});

const Column = mongoose.model<TColumn>('Column', columnSchema);

export { Column, columnSchema, TColumn };
