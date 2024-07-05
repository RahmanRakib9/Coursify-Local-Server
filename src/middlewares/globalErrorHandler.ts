/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { TErrorSources } from '../errors/error.interface';
import handleZodError from '../errors/handleZodError';
import config from '../app/config/config';

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // default statusCode,message and errorSource
  let statusCode = 500;
  let message = error.message || 'Error From Global Error Handler';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Message From Default Error Sources',
    },
  ];

  if (error instanceof ZodError) {
    const customErrorFormat = handleZodError(error);
    statusCode = customErrorFormat.statusCode;
    message = customErrorFormat.message;
    errorSources = customErrorFormat.errorSources;
  }

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error,
    stack: config.env == 'development' ? error.stack : null,
  });
};
export default globalErrorHandler;
