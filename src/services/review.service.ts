import IReview from '../interfaces/review.interface';
import Review from '../models/review.model';

const createReview = async (reviewPayload: IReview) => {
  const review = await Review.create(reviewPayload);
  return review;
};

const reviewServices = {
  createReview,
};
export default reviewServices;
