/* eslint-disable no-console */
import { NextFunction, Request, Response } from 'express';
import AppError from '../utils/AppError';

// eslint-disable-next-line max-lines-per-function
const errorMiddleware = (err: Error, _req: Request, res: Response, next: NextFunction):void => {
  const { name, message, statusCode, type } = err as AppError;
  console.error(`name: ${name}`);
  switch (type) {
    case 'BadRequestError':
      res.status(statusCode).json({ message });
      break;
    case 'ValidationError':
      res.status(statusCode).json({ message });
      break;
    case 'NotFoundError':
      res.status(statusCode).json({ message });
      break;
    case 'ConflictError':
      res.status(statusCode).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }
  next();
};

export default errorMiddleware;
