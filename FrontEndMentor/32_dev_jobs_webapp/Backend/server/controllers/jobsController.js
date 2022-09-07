const Job = require('../models/jobModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllJobs = catchAsync(async (req, res, next) => {
  const jobs = await Job.find({});
  res.json(jobs);
});

// exports.getJob = null;

// exports.searchJobs = null;
