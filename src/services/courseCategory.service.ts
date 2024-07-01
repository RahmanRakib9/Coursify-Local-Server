import ICourseCategory from '../interfaces/courseCategory.interface';
import CourseCategory from '../models/courseCategory.model';

const createCourseCategory = async (courseCategoryPayload: ICourseCategory) => {
  const courseCategory = await CourseCategory.create(courseCategoryPayload);
  return courseCategory;
};

const getAllCategories = async () => {
  const categories = await CourseCategory.find();
  return categories;
};

const courseCategoryServices = {
  createCourseCategory,
  getAllCategories,
};
export default courseCategoryServices;
