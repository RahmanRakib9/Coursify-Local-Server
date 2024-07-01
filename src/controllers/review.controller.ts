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
const reviewControllers = {
  handleCreateReview,
};
export default reviewControllers;
