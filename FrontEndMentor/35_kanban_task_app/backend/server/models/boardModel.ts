import { Column, columnSchema, TColumn } from '#Models/columnModel';
import mongoose, { Model, Types } from 'mongoose';

interface TBoard {
  name: string;
  columns: TColumn[];
}

type BoardDocumentProps = {
  columns: Types.DocumentArray<TColumn>;
};
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

export { Board, TBoard };

// type TBoard = {
//   name: string;
//   columns: TColumn[];
// };

// const boardSchema = new mongoose.Schema<TBoard>({
//   name: {
//     type: 'String',
//     maxLength: 30,
//     required: true,
//     trim: true,
//   },
//   columns: [{ type: columnSchema, required: false }],
// });

// const Board = mongoose.model<TBoard>('Board', boardSchema);

// export { Board, TBoard };
