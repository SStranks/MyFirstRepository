import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';

import globalErrorHandler from '#Controllers/errorController';
import { rollbarClient } from '#Controllers/rollbarController';
import commentRouter from '#Routes/commentRoutes';
import requestRouter from '#Routes/requestRoutes';
import AppError from '#Utils/appError';

const app: Application = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/rollbar', rollbarClient);
app.use('/api/v1/requests', requestRouter);
app.use('/api/v1/comments', commentRouter);

// Error Handler
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
