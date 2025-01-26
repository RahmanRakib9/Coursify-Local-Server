import { NextFunction, Request, Response } from 'express';
import retainUserServices from '../services/retention.service';
import httpStatus from 'http-status';

async function handleRetainUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id = req.params.id;
    await retainUserServices.retainUser(id);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User marked for deletion. Data will be retained for 30 days.',
    });
  } catch (error) {
    next(error);
  }
}
async function handleRecoverUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id = req.params.id;
    await retainUserServices.recoverUser(id);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User recovery successful. Account is now active.',
    });
  } catch (error) {
    next(error);
  }
}

const retentionUserControllers = {
  handleRetainUser,
  handleRecoverUser,
};
export default retentionUserControllers;
