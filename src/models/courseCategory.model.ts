import { Schema, model } from 'mongoose';
import ICourseCategory from '../interfaces/courseCategory.interface';
import ApiError from '../errors/apiError';
import httpStatus from 'http-status';

const courseCategorySchema = new Schema<ICourseCategory>({
  name: {
    type: String,
    required: [true, 'Course Category Name is Required!'],
  },
});

// prevent duplicate course category
courseCategorySchema.pre('save', async function (next) {
  const isCourseCategoryExist = await CourseCategory.findOne({
    name: this.name,
  });
  if (isCourseCategoryExist) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `${this.name} Category Course Already Exist!`,
    );
  }
  next();
});

const CourseCategory = model<ICourseCategory>(
  'CourseCategory',
  courseCategorySchema,
);
export default CourseCategory;
