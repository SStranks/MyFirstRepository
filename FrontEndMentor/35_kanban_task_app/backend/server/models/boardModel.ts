import type { IBoard } from '#Shared/types';
import { IColumnDocumentOverrides, columnSchema } from '#Models/columnModel';
import mongoose, { Model, Types } from 'mongoose';

// https://mongoosejs.com/docs/typescript/subdocuments.html
interface BoardDocumentOverrides {
  columns: Types.DocumentArray<IColumnDocumentOverrides>;
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
