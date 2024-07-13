import { NextFunction, Request, Response } from 'express';
import reviewServices from '../services/review.service';
import httpStatus from 'http-status';

async function handleGetReviews(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const reviews = await reviewServices.getReviews();

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Reviews retrieved successfully',
      reviews,
    });
  } catch (error) {
    next(error);
  }
}
const reviewControllers = {
  handleGetReviews,
};
export default reviewControllers;
