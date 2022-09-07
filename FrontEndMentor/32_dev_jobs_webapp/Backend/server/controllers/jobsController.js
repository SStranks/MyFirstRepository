const Job = require('../models/jobModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllJobs = catchAsync(async (req, res, next) => {
  // res.send('hello simon');
  const jobs = await Job.find({});
  res.json(JSON.stringify(jobs));
});

// exports.getJob = null;

// exports.searchJobs = null;
