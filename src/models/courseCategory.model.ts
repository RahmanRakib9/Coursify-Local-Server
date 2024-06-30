import { Schema, model } from 'mongoose';
import ICourseCategory from '../interfaces/courseCategory.interface';

const courseCategorySchema = new Schema<ICourseCategory>({
  name: {
    type: String,
  },
});

const CourseCategory = model<ICourseCategory>(
  'CourseCategory',
  courseCategorySchema,
);
export default CourseCategory;
