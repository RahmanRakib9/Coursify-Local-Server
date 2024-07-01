import { Schema, model } from 'mongoose';
import IReview from '../interfaces/review.interface';

const reviewSchema = new Schema<IReview>({
  courseId: {
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
