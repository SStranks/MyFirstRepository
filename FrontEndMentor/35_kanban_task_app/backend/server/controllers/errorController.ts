import AppError from '#Utils/appError';
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

const handleCastErrorDB = (err: any) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err: any) => {
  if (err.errmsg) {
    const value = (
      (err.errmsg as string).match(/(["'])(\\?.)*?\1/) as Array<string>
    )[0];
    const message = `Duplicate field value: ${value}. Please use another value!`;
    return new AppError(message, 400);
  }
  return new AppError(
    'Error: Duplicate field value; Error handler misconfiguration.',
    400
  );
};

const handleValidationErrorDB = (err: any) => {
  const errors = (Object.values(err.errors) as Record<string, unknown>[]).map(
    (el) => el.message
  );
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const sendErrorDev = (err: AppError, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err: AppError, res: Response) => {
  // Operational: Error can be safely sent to client.
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // Log Error
    console.log('NON OPERATIONAL ERROR:', err);
    // Response
    res.status(500).json({
      status: 'Error',
      message: 'Non-operational error. Contact support',
    });
  }
};

const globalErrorHandler: ErrorRequestHandler = (
  err: AppError | any,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    // MongoDB Casting Error
    if (error.name === 'CastError') error = handleCastErrorDB(error);
    // MongoDB Duplicate Fields Error.
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    // MongoDB Validation Error
    if (error.name === 'CastError') error = handleValidationErrorDB(error);

    sendErrorProd(error, res);
  }

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

export default globalErrorHandler;
