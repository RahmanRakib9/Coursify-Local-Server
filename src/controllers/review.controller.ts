import { NextFunction, Request, Response } from 'express';
import reviewServices from '../services/review.service';
import reviewValidation from '../schemas/review.schema';
import httpStatus from 'http-status';

async function handleCreateReview(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const reviewPayload = req.body;
    reviewValidation.createReviewSchema.parse(reviewPayload);
    const review = await reviewServices.createReview(reviewPayload);
    res.status(httpStatus.CREATED).json({
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'Review created successfully',
      review,
    });
  } catch (error) {
    next(error);
  }
}

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
  handleCreateReview,
  handleGetReviews,
};
export default reviewControllers;
