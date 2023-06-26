import {
  createRequest,
  deleteRequest,
  getAllRequests,
  getRequest,
  updateRequest,
} from '#Controllers/requestController';
import express from 'express';

const requestRouter = express.Router();

requestRouter.route('/').get(getAllRequests).post(createRequest);

requestRouter
  .route('/:id')
  .get(getRequest)
  .patch(updateRequest)
  .delete(deleteRequest);

export default requestRouter;
