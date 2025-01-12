import { NextFunction, Request, Response } from 'express';

async function handleRetainUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    console.log('hello data retention!');
  } catch (error) {
    next(error);
  }
}

const retentionUserControllers = {
  handleRetainUser,
};
export default retentionUserControllers;
