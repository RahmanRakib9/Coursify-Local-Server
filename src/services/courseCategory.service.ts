import ICourseCategory from '../interfaces/courseCategory.interface';
import CourseCategory from '../models/courseCategory.model';

const createCourseCategory = async (courseCategoryPayload: ICourseCategory) => {
  const courseCategory = await CourseCategory.create(courseCategoryPayload);
  return courseCategory;
};

const courseCategoryServices = {
  createCourseCategory,
};
export default courseCategoryServices;
