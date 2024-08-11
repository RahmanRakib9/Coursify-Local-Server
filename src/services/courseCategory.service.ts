import ICourseCategory from '../interfaces/courseCategory.interface';
import CourseCategory from '../models/courseCategory.model';

const createCourseCategory = async (courseCategoryPayload: ICourseCategory) => {
  const courseCategory = await CourseCategory.create(courseCategoryPayload);
  return courseCategory;
};

const getAllCourseCategories = async () => {
  const categories = await CourseCategory.find();
  return categories;
};

const getCourseCategory = async (name: string) => {
  const category = await CourseCategory.findOne({ name });
  return category;
};

const courseCategoryServices = {
  createCourseCategory,
  getAllCourseCategories,
  getCourseCategory,
};
export default courseCategoryServices;
