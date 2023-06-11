const express = require('express');
const jobController = require('../controllers/jobsController');

const router = express.Router();

router
  .route('/jobs')
  .get(jobController.getAllJobs)
  .post(jobController.searchJobs);

module.exports = router;
