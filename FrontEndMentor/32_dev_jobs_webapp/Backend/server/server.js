require('dotenv').config();
const connectDB = require('./config/db');
const jsonData = require('./dev-data/data.json');

const app = require('./app');

connectDB();

const PORT = process.env.NODE_DOCKER_PORT || 3000;

app.get('/', (req, res) => res.json(jsonData));

const server = app.listen(PORT, () => {
  console.log(
    `Server running successfuly in ${process.env.NODE_ENV} mode on Port ${PORT}`
  );
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection. Shutting down server');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received. Shutting down server');
  server.close(() => {
    console.log('Server terminated');
  });
});
