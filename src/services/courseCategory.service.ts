import httpStatus from 'http-status';
import ApiError from '../errors/apiError';
import ICourseCategory from '../interfaces/courseCategory.interface';
import CourseCategory from '../models/courseCategory.model';

const createCourseCategory = async (courseCategoryPayload: ICourseCategory) => {
  const courseCategory = await CourseCategory.create(courseCategoryPayload);
  return courseCategory;
};

const getAllCourseCategories = async () => {
  const courseCategories = await CourseCategory.find();
  return courseCategories;
};

const getCourseCategory = async (name: string) => {
  const courseCategory = await CourseCategory.findOne({ name });
  return courseCategory;
};

const updateCourseCategory = async (
  id: string,
  updateCourseCategoryPayload: ICourseCategory,
) => {
  const courseCategory = await CourseCategory.findOne({ _id: id });

  if (!courseCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course Category Not Found!');
  }

  const updatedCourseCategory = await CourseCategory.updateOne(
    { _id: id },
    updateCourseCategoryPayload,
    { new: true },
  );

  return updatedCourseCategory;
};

const deleteCourseCategory = async (id: string) => {
  const courseCategory = await CourseCategory.findOne({ _id: id });

  if (!courseCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course Category Not Found!');
  }

  await CourseCategory.deleteOne({ _id: id });
};

const courseCategoryServices = {
  createCourseCategory,
  getAllCourseCategories,
  getCourseCategory,
  updateCourseCategory,
  deleteCourseCategory,
};
export default courseCategoryServices;
