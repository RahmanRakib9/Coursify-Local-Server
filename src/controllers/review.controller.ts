import { NextFunction, Request, Response } from 'express';
import reviewServices from '../services/review.service';

async function handleCreateReview(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const reviewPayload = req.body;
    const review = await reviewServices.createReview(reviewPayload);
    res.status(201).json({
      success: true,
      statusCode: 201,
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

    res.status(200).json({
      success: true,
      statusCode: 200,
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
