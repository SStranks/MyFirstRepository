import type { IBoard, IColumn } from '#Shared/types.d.ts';
// import type { IBoard, IColumn } from '../../../shared/types.d.ts';
// import type { IBoard, IColumn } from '../types.ts'; // NOTE:  Works (file inside root structure)
import { IColumnDocumentOverrides, columnSchema } from '#Models/columnModel.js';
import mongoose, { Model, Types } from 'mongoose';

// https://mongoosejs.com/docs/typescript/subdocuments.html
interface BoardDocumentOverrides {
  columns: Types.DocumentArray<IColumn & IColumnDocumentOverrides>;
}

type TBoardModel = Model<IBoard, {}, BoardDocumentOverrides>;

const boardSchema = new mongoose.Schema<IBoard, TBoardModel>({
  name: {
    type: 'String',
    maxLength: 30,
    required: true,
    trim: true,
  },
  columns: [{ type: columnSchema, required: false }],
});

const Board = mongoose.model<IBoard, TBoardModel>('Board', boardSchema);

export { Board };
