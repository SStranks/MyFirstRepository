import {
  createRequest,
  deleteRequest,
  getAllRequestComments,
  getAllRequests,
  getRequest,
  updateRequest,
  updateRequestUpvote,
} from '#Controllers/requestController';
import express from 'express';

const router = express.Router();

router.route('/').get(getAllRequests).post(createRequest);

router.route('/:id').get(getRequest).patch(updateRequest).delete(deleteRequest);

router.route('/:id/upvote').patch(updateRequestUpvote);

router.route('/comments/:id').get(getAllRequestComments);

export default router;
