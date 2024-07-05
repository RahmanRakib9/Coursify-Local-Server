/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = error.message || 'Error From Global Error Handler';

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error: error,
  });
};
export default globalErrorHandler;
