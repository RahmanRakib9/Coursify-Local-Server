import mongoose from 'mongoose';

interface IReview {
  course: mongoose.Schema.Types.ObjectId;
  rating: number;
  review: string;
  user: mongoose.Schema.Types.ObjectId;
}
export default IReview;
