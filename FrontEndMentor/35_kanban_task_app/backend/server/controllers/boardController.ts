import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from '#Config/dbHandlers';
import { Board } from '#Models/boardModel';

const getBoard = getOne(Board);

const getAllBoards = getAll(Board);

const createBoard = createOne(Board);

const updateBoard = updateOne(Board);

const deleteBoard = deleteOne(Board);

export { createBoard, deleteBoard, getAllBoards, getBoard, updateBoard };
