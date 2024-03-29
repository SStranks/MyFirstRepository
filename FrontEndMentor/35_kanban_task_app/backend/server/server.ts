import { configDotenv } from 'dotenv';
import { replaceTscAliasPaths } from 'tsc-alias';
if (process.env.NODE_ENV === 'development') {
  configDotenv();
}
if (process.env.NODE_ENV === 'production') {
  replaceTscAliasPaths();
}

// Unhandled Exception Errors: Needs to be before any runtime code.
process.on('uncaughtException', (err: any) => {
  console.log('Uncaught Exception. Shutting down server');
  console.log(err.name, err.message);
  process.exit(1);
});

import connectDB from '#Config/db.js';
import app from './app.js';
connectDB();

const PORT = process.env.NODE_DOCKER_PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running successfuly in ${process.env.NODE_ENV} mode on Port ${PORT}`
  );
});

// Unhandled Rejection Errors
process.on('unhandledRejection', (err: any) => {
  console.log('Unhandled Rejection. Shutting down server');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// SIGTERM
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received. Shutting down server');
  server.close(() => {
    console.log('Server terminated');
  });
});
