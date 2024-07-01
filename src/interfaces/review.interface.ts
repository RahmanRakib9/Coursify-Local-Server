import mongoose from 'mongoose';

interface IReview {
  courseId: mongoose.Schema.Types.ObjectId;
  rating: number;
  review: string;
}
export default IReview;
