// https://reflectoring.io/express-error-handling/
// custom error to carry statusCode using express async errors.
export default class AppError extends Error{
  statusCode: number;
  type: string;

  constructor(statusCode: number, type: string, message: string | undefined) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = Error.name;
    this.statusCode = statusCode;
    this.type = type;
    Error.captureStackTrace(this);
  }
}