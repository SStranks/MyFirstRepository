import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';

import globalErrorHandler from '#Controllers/errorController';
import requestRouter from '#Routes/requestRoutes';
import AppError from '#Utils/appError';

const app: Application = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/requests', requestRouter);

// Error Handler
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
