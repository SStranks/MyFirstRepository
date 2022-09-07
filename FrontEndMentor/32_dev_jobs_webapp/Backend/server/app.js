const express = require('express');
const viewRouter = require('./routes/viewRoutes');
const jobRouter = require('./routes/jobRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/', viewRouter);
app.use('/job', jobRouter);
app.all('*', (res) => res.redirect('/'));

module.exports = app;
