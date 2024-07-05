/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { TErrorSources } from '../errors/error.interface';
import handleZodError from '../errors/handleZodError';
import config from '../app/config/config';
import handleMongooseError from '../errors/handleMongooseError';
import handleCastError from '../errors/castErrorHandler';
import ApiError from '../errors/apiError';

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // default statusCode,message and errorSource
  let statusCode = 500;
  let message = 'Error From Global Error Handler';
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
  } else if (error?.name === 'ValidationError') {
    const customErrorFormat = handleMongooseError(error);
    statusCode = customErrorFormat.statusCode;
    message = customErrorFormat.message;
    errorSources = customErrorFormat.errorSources;
  } else if (error?.name === 'CastError') {
    const customErrorFormat = handleCastError(error);
    statusCode = customErrorFormat.statusCode;
    message = customErrorFormat.message;
    errorSources = customErrorFormat.errorSources;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorSources = [
      {
        path: '',
        message: error?.message,
      },
    ];
  } else if (error instanceof Error) {
    message = error.message;
    errorSources = [
      {
        path: '',
        message: error?.message,
      },
    ];
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
