import { Schema, model } from 'mongoose';
import ICourse from '../interfaces/course.interface';
import ApiError from '../errors/apiError';
import httpStatus from 'http-status';

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: [true, 'Course Title is Required!'],
  },
  instructor: {
    type: String,
    required: [true, 'Instructor is Required!'],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'CourseCategory',
  },
  price: {
    type: Number,
    required: [true, 'Price is Required!'],
  },
  tags: {
    type: [{ name: String, isDeleted: Boolean }],
    required: [true, 'Tags are Required!'],
  },
  startDate: {
    type: String,
    required: [true, 'Course Start Date is Required!'],
  },
  endDate: {
    type: String,
    required: [true, 'Course End Date is Required!'],
  },
  language: {
    type: String,
    required: [true, 'Course Language is Required!'],
  },
  provider: {
    type: String,
    required: [true, 'Course SProvider is Required!'],
  },
  details: {
    type: { level: String, description: String },
    required: [true, 'Course Details are Required!'],
  },
});

// Prevent duplicate course name
courseSchema.pre('save', async function (next) {
  const isCourseExist = await Course.findOne({
    title: this.title,
  });
  if (isCourseExist) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Course with title ${this.title} already exists!`,
    );
  }
  next();
});

const Course = model<ICourse>('Course', courseSchema);
export default Course;
