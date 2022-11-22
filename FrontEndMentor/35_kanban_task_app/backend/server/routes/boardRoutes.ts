import {
  createBoard,
  deleteBoard,
  getAllBoards,
  getBoard,
  updateBoard,
} from '#Controllers/boardController';
import express from 'express';

const boardRouter = express.Router();

boardRouter.route('/').get(getAllBoards).post(createBoard);

boardRouter.route('/:id').get(getBoard).patch(updateBoard).delete(deleteBoard);

export default boardRouter;
