import type { TColumn, TTask } from '#Shared/types';
import { taskSchema } from '#Models/taskModel';
import mongoose, { Model, Types } from 'mongoose';

export interface IColumnDocumentProps {
  tasks: Types.DocumentArray<TTask>;
}

type TColumnModelType = Model<TColumn, {}, IColumnDocumentProps>;

const columnSchema = new mongoose.Schema<TColumn, TColumnModelType>({
  name: {
    type: 'String',
    maxLength: 30,
    required: true,
    trim: true,
  },
  tasks: [{ type: taskSchema, required: false }],
});

export { columnSchema, TColumnModelType };
