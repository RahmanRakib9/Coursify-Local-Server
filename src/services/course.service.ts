import ICourse from '../interfaces/course.interface';
import Course from '../models/course.model';

const createCourse = async (coursePayload: ICourse) => {
  const course = await Course.create(coursePayload);
  return course;
};

const courseServices = {
  createCourse,
};
export default courseServices;
