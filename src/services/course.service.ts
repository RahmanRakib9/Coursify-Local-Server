import httpStatus from 'http-status';
import ApiError from '../errors/apiError';
import ICourse from '../interfaces/course.interface';
import IReview from '../interfaces/review.interface';
import Course from '../models/course.model';
import Review from '../models/review.model';

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
  const limitQuery = await paginateQuery.limit(limit).populate('category');

  const courses = limitQuery;

  return courses;
};

const getCourseBySlug = async (slug: string) => {
  const course = await Course.findOne({ slug }).populate('category');
  return course;
};

const getBestCourseByTotalRating = async () => {
  const bestCourseByTotalRating = await Course.aggregate([
    { $sort: { totalRating: -1 } },
    { $limit: 1 },
  ]).exec();

  return bestCourseByTotalRating[0];
};

/** Review */
const createReview = async (slug: string, reviewPayload: Partial<IReview>) => {
  const session = await Course.startSession();

  const course = await Course.findOne({ slug });

  if (!course) {
    throw new ApiError(httpStatus.BAD_REQUEST, `${slug} course is not found!`);
  }

  try {
    session.startTransaction();

    const review = await Review.create(
      [
        {
          course: course._id,
          ...reviewPayload,
        },
      ],
      { session },
    );

    const reviewCount = await Review.countDocuments({
      course: course._id,
    }).session(session);

    await Course.updateOne(
      { slug },
      { totalRating: reviewCount },
      { new: true },
    ).session(session);

    await session.commitTransaction();

    return review[0];
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

const getAllCourseReviews = async (slug: string) => {
  const course = await Course.findOne({ slug });

  if (!course) {
    throw new ApiError(httpStatus.BAD_REQUEST, `${slug} course is not found!`);
  }

  /** Populate the "course" and "category" field:
   * "course" field can directly populate because this field is exist on review
   * but "category" field cannot populate directly because this field does not exist on review
   * "category" field is exist under the course entity
   */
  const reviews = await Review.find({ course: course._id }).populate({
    path: 'course',
    populate: {
      path: 'category',
      model: 'CourseCategory',
    },
  });

  return reviews;
};

const courseServices = {
  createCourse,
  getCourses,
  getCourseBySlug,
  createReview,
  getAllCourseReviews,
  getBestCourseByTotalRating,
};
export default courseServices;
