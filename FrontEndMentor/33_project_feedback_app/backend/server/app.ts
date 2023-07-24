import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';

import globalErrorHandler from '#Controllers/errorController';
import {
  rollbarClient,
  rollbarRateLimit,
} from '#Controllers/rollbarController';
import commentRouter from '#Routes/commentRoutes';
import requestRouter from '#Routes/requestRoutes';
import AppError from '#Utils/appError';

const app: Application = express();
app.use(express.json());
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Routes
app.use('/rollbar', rollbarRateLimit, rollbarClient);
app.use('/api/v1/requests', requestRouter);
app.use('/api/v1/comments', commentRouter);

// Error Handler
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
