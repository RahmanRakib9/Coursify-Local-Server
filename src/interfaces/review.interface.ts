import mongoose from 'mongoose';

interface IReview {
  course: mongoose.Schema.Types.ObjectId;
  rating: number;
  review: string;
}
export default IReview;
