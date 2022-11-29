import { Column, columnSchema, TColumn } from '#Models/columnModel';
import mongoose from 'mongoose';

type TBoard = {
  name: string;
  columns: TColumn[];
};

const boardSchema = new mongoose.Schema<TBoard>({
  name: {
    type: 'String',
    maxLength: 30,
    required: true,
    trim: true,
  },
  columns: [{ type: columnSchema, required: false }],
});

const Board = mongoose.model<TBoard>('Board', boardSchema);

export { Board, TBoard };
