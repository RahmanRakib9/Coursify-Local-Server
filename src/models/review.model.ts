import { Schema, model } from 'mongoose';
import IReview from '../interfaces/review.interface';

const reviewSchema = new Schema<IReview>({
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
  },
  rating: {
    type: Number,
  },
  review: {
    type: String,
  },
});

const Review = model<IReview>('Review', reviewSchema);
export default Review;
