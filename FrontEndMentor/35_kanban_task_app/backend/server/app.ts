import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';

import boardRouter from '#Routes/boardRoutes';

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/boards', boardRouter);

// Error Handler
app.use((err, res: Response, req: Request, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';

  res.status(statusCode).json({
    status,
    message: err.message,
  });
});
