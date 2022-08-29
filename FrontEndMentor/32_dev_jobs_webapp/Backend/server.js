require('dotenv').config();
const express = require('express');
const connectDB = require('./db');

const app = express();
connectDB();

app.use(express.json());

const PORT = process.env.NODE_DOCKER_PORT || 3000;

app.get('/', (req, res) => res.send('hello Simon!'));

app.listen(PORT, () => {
  console.log(
    `Server running successfuly in ${process.env.NODE_ENV} mode on Port ${PORT}`
  );
});
