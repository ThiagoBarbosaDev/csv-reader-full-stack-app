// https://reflectoring.io/express-error-handling/
// custom error to carry statusCode using express async errors.

import { ValidationError } from 'joi';
import {
  INotFoundCodeError,
  IValidationResponse,
} from '../interfaces';

export default class AppError extends Error {
  statusCode: number;
  type: string | undefined;
  context: ValidationError | INotFoundCodeError[] | undefined;
  response?: IValidationResponse;

  constructor(
    statusCode: number,
    message?: string,
    context?: ValidationError | INotFoundCodeError[],
    response?: IValidationResponse
  ) {
    super(message);
    this.name = Error.name;
    this.statusCode = statusCode;
    this.context = context;
    this.response = response;
  }
}
