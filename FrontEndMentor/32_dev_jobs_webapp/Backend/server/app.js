const express = require('express');
const cors = require('cors');
// const path = require('path');
const jobRouter = require('./routes/jobsRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// app.use(express.static(path.join(__dirname, './public')));

// Routes
app.use('/api', jobRouter);
// app.all('*', (res) => res.redirect('/'));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';

  res.status(statusCode).json({
    status,
    message: err.message,
  });
});

module.exports = app;
