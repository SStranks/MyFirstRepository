import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from '#Config/dbHandlers';
import { Board } from '#Models/boardModel';
// import catchAsync from '#Utils/catchAsync';

const getBoard = getOne(Board);

const getAllBoards = getAll(Board);

const createBoard = createOne(Board);

const updateBoard = updateOne(Board);

const deleteBoard = deleteOne(Board);

export { getBoard, getAllBoards, createBoard, deleteBoard, updateBoard };
