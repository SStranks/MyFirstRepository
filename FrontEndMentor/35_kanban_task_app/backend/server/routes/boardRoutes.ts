import {
  createBoard,
  deleteBoard,
  getAllBoards,
  getBoard,
  updateBoard,
} from '#Controllers/boardController.js';
import {
  createColumn,
  deleteColumn,
  updateColumn,
} from '#Controllers/columnController.js';
import {
  createTask,
  deleteTask,
  updateTask,
} from '#Controllers/taskController.js';
import express from 'express';

const boardRouter = express.Router();

boardRouter.route('/').get(getAllBoards).post(createBoard);

boardRouter
  .route('/:boardId')
  .get(getBoard)
  .post(createColumn)
  .patch(updateBoard)
  .delete(deleteBoard);

boardRouter
  .route('/:boardId/:columnId')
  .post(createTask)
  .patch(updateColumn)
  .delete(deleteColumn);

boardRouter
  .route('/:boardId/:columnId/:taskId')
  .patch(updateTask)
  .delete(deleteTask);

export default boardRouter;
