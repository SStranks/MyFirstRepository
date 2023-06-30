/* eslint-disable func-names */
import { mongooseConnection } from '#Config/db';
import { NextFunction, Request, Response } from 'express';
import { ClientSession } from 'mongoose';

const catchAsyncTransaction = <T>(
  fn: (
    req: Request,
    res: Response,
    next: NextFunction,
    session: ClientSession
  ) => Promise<T>
) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    const session = await mongooseConnection.startSession();
    try {
      session.startTransaction();

      const value = await fn(req, res, next, session);

      await session.commitTransaction();

      return value;
    } catch (error) {
      await session.abortTransaction();
      next(error);
    } finally {
      session.endSession();
    }

    return true;
  };
};

export default catchAsyncTransaction;
