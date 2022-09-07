const express = require('express');
const jobController = require('../controllers/jobsController');

const router = express.Router();

router.route('/jobs').get(jobController.getAllJobs);
// router.route('/jobs/:id').get(jobController.getJob);
// router.route('/jobs/search/:id').get(jobController.searchJobs);

module.exports = router;
