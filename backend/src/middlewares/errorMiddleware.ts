/* eslint-disable no-console */
import { NextFunction, Request, Response } from 'express';
import AppError from '../utils/AppError';

// eslint-disable-next-line max-lines-per-function
const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const { data, statusCode, message } = err as AppError;
  console.error(`name: ${message}`);

  res.status(statusCode).json({ data });
};

export default errorMiddleware;
