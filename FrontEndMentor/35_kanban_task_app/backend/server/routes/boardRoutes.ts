import {
  createBoard,
  deleteBoard,
  getAllBoards,
  getBoard,
  updateBoard,
} from '#Controllers/boardController';
import {
  createColumn,
  deleteColumn,
  getAllColumns,
  getColumn,
  updateColumn,
} from '#Controllers/columnController';
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from '#Controllers/taskController';
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
  .get(getColumn)
  .post(createTask)
  .patch(updateColumn)
  .delete(deleteColumn);

boardRouter
  .route('/:boardId/:columnId/:taskId')
  .get(getTask)
  .patch(updateTask)
  .delete(deleteTask);

export default boardRouter;
