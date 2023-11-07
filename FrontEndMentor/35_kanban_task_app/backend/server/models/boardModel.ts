import type { TBoard } from '#Shared/types';
import { IColumnDocumentProps, columnSchema } from '#Models/columnModel';
import mongoose, { Model, Types } from 'mongoose';

interface BoardDocumentProps {
  columns: Types.DocumentArray<IColumnDocumentProps>;
}

type BoardModelType = Model<TBoard, {}, BoardDocumentProps>;

const boardSchema = new mongoose.Schema<TBoard, BoardModelType>({
  name: {
    type: 'String',
    maxLength: 30,
    required: true,
    trim: true,
  },
  columns: [{ type: columnSchema, required: false }],
});

const Board = mongoose.model<TBoard, BoardModelType>('Board', boardSchema);

export { Board };
