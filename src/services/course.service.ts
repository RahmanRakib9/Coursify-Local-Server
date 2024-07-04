import ICourse from '../interfaces/course.interface';
import Course from '../models/course.model';

const createCourse = async (coursePayload: ICourse) => {
  const course = await Course.create(coursePayload);
  return course;
};

const getCourses = async (query: Record<string, unknown>) => {
  // search by these following parameter
  const searchableFields = ['title', 'language', 'provider'];
  // default search term is empty string
  let searchTerm = '';
  // pagination info
  let page = 1;
  let limit = 1;
  let skip = 0;

  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  if (query.limit) {
    limit = Number(query.limit);
  }

  if (query.page) {
    page = Number(query.page);
    skip = (page - 1) * limit;
  }

  const searchedCourses = Course.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  const paginateQuery = searchedCourses.skip(skip);
  const limitQuery = await paginateQuery.limit(limit);

  const courses = limitQuery;

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
