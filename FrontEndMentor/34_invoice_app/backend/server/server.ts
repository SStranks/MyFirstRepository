/* eslint-disable import/first */
// NOTE:  Uncomment during production build - substitutes all alias names for actual paths.
// import { replaceTscAliasPaths } from 'tsc-alias';
// replaceTscAliasPaths({ configFile: '../tsconfig.json' });

import dotenv from 'dotenv';

dotenv.config();

// Unhandled Exception Errors: Needs to be before any runtime code.
process.on('uncaughtException', (error: Error) => {
  console.log('Uncaught Exception. Shutting down server');
  console.log(error.name, error.message);
  process.exit(1);
});

import connectDB from '#Config/db';
import app from './app';

// Initialize DB connection
connectDB();

const PORT = process.env.NODE_DOCKER_PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running successfuly in ${process.env.NODE_ENV} mode on Port ${PORT}`
  );
});

// Unhandled Rejection Errors
process.on('unhandledRejection', (error: { name: string; message: string }) => {
  console.log('Unhandled Rejection. Shutting down server');
  console.log(error.name, error.message);
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
