import ICourse from '../interfaces/course.interface';
import Course from '../models/course.model';

const createCourse = async (coursePayload: ICourse) => {
  const course = await Course.create(coursePayload);
  return course;
};

const getCourses = async () => {
  const courses = await Course.find();
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
