import type { IColumn, ITask } from '#Shared/types';
import { taskSchema } from '#Models/taskModel';
import mongoose, { Model, Types } from 'mongoose';

export interface IColumnDocumentOverrides {
  tasks: Types.DocumentArray<ITask>;
}

type TColumnModel = Model<IColumn, {}, IColumnDocumentOverrides>;

const columnSchema = new mongoose.Schema<IColumn, TColumnModel>({
  name: {
    type: 'String',
    maxLength: 30,
    required: true,
    trim: true,
  },
  tasks: [{ type: taskSchema, required: false }],
});

export { columnSchema, TColumnModel };
