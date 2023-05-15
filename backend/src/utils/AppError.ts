// https://reflectoring.io/express-error-handling/
// custom error to carry statusCode using express async errors.

import { ValidationError } from 'joi';
import { INotFoundCodeError } from '../interfaces';

export default class AppError extends Error {
  statusCode: number;
  type: string | undefined;
  data: ValidationError | INotFoundCodeError[] | undefined;

  constructor(
    statusCode: number,
    message?: string,
    data?: ValidationError | INotFoundCodeError[]
  ) {
    super(message);
    this.name = Error.name;
    this.statusCode = statusCode;
    this.data = data;
  }
}
