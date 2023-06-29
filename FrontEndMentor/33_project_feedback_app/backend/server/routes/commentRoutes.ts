import { createComment, updateComment } from '#Controllers/commentController';
import express from 'express';

const commentRouter = express.Router();

commentRouter.route('/').post(createComment).patch(updateComment);

export default commentRouter;
