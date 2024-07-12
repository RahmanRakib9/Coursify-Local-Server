import Review from '../models/review.model';

const getReviews = async () => {
  const reviews = await Review.find();
  return reviews;
};

const reviewServices = {
  getReviews,
};
export default reviewServices;
