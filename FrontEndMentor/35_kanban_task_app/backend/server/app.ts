import cors from 'cors';
import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';

import globalErrorHandler from '#Controllers/errorController';
import boardRouter from '#Routes/boardRoutes';
import AppError from '#Utils/appError';

interface Error {
  statusCode?: number;
  status?: string | number;
  message: string;
}

const app: Application = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/boards', boardRouter);

// Error Handler
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
