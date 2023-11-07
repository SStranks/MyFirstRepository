import { taskSchema, TTask } from '#Models/taskModel';
import mongoose, { Model, Types } from 'mongoose';

interface TColumn {
  _id: string;
  name: string;
  tasks: Types.DocumentArray<TTask>;
}

type ColumnDocumentProps = {
  tasks: Types.DocumentArray<TTask>;
};

type ColumnModelType = Model<TColumn, {}, ColumnDocumentProps>;

const columnSchema = new mongoose.Schema<TColumn, ColumnModelType>({
  name: {
    type: 'String',
    maxLength: 30,
    required: true,
    trim: true,
  },
  tasks: [{ type: taskSchema, required: false }],
});

// const Column = mongoose.model<TColumn>('Column', columnSchema);

// export { Column, columnSchema, TColumn };
export { columnSchema, TColumn, ColumnModelType };

// type TColumn = {
//   _id: string;
//   name: string;
//   tasks: TTask[];
// };

// const columnSchema = new mongoose.Schema({
//   name: {
//     type: 'String',
//     maxLength: 30,
//     required: true,
//     trim: true,
//   },
//   tasks: [{ type: taskSchema, required: false }],
// });

// const Column = mongoose.model<TColumn>('Column', columnSchema);

// export { Column, columnSchema, TColumn };
