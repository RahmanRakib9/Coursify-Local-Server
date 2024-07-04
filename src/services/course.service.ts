import ICourse from '../interfaces/course.interface';
import Course from '../models/course.model';

const createCourse = async (coursePayload: ICourse) => {
  const course = await Course.create(coursePayload);
  return course;
};

const getCourses = async (query: Record<string, unknown>) => {
  // search by these following parameter
  const searchableFields = ['title', 'language', 'provider'];
  let searchTerm = '';

  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const courses = await Course.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });
  return courses;
};

const getCourseWithReviews = async (courseId: string) => {
  const course = await Course.findById(courseId);
  return course;
};

const courseServices = {
  createCourse,
  getCourseWithReviews,
  getCourses,
};
export default courseServices;
