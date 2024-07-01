import { Schema, model } from 'mongoose';
import ICourse from '../interfaces/course.interface';

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
  },
  instructor: {
    type: String,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'CourseCategory',
  },
  price: {
    type: Number,
  },
  tags: {
    type: [{ name: String, isDeleted: Boolean }],
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  language: {
    type: String,
  },
  provider: {
    type: String,
  },
  details: {
    type: { level: String, description: String },
  },
});

const Course = model<ICourse>('Course', courseSchema);
export default Course;
