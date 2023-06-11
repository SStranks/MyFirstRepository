const Job = require('../models/jobModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllJobs = catchAsync(async (req, res, next) => {
  const jobs = await Job.find({});
  res.json(jobs);
});

exports.searchJobs = catchAsync(async (req, res, next) => {
  const { search, filter, time } = req.body;
  const searchRegExp = new RegExp(`${search}`, `i`);
  const filterRegExp = new RegExp(`${filter}`, `i`);

  const query = { position: searchRegExp, location: filterRegExp };
  if (time) query.contract = /full/i;

  const jobs = await Job.find(query);

  res.json(jobs);
});
