import { getAllBoards } from '#Controllers/boardController';
import express from 'express';

const boardRouter = express.Router();

boardRouter.route('/boards').get(getAllBoards);
// .post(createBoard)
// .patch(updateBoard);

export default boardRouter;
