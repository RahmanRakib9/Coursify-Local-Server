import { NextFunction, Request, Response } from 'express';
import courseServices from '../services/course.service';
import courseValidation from '../schemas/course.schema';
import httpStatus from 'http-status';

async function handleCreateCourse(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const coursePayload = req.body;
    courseValidation.createCourseSchema.parse(coursePayload);
    const course = await courseServices.createCourse(coursePayload);

    res.status(httpStatus.CREATED).json({
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'Course created successfully',
      course,
    });
  } catch (error) {
    next(error);
  }
}

async function handleGetCourses(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const searchTerm = req.query;
    const courses = await courseServices.getCourses(searchTerm);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Courses retrieved successfully',
      courses,
    });
  } catch (error) {
    next(error);
  }
}

async function handleGetCourseBySlug(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { slug } = req.params;
    const course = await courseServices.getCourseBySlug(slug);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: `${slug} course is retrieved successfully`,
      course,
    });
  } catch (error) {
    next(error);
  }
}

/**Review */
async function handleCreateReview(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { slug } = req.params;
    const reviewPayload = req.body;
    const review = await courseServices.createReview(slug, reviewPayload);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Review Created Successfully',
      review,
    });
  } catch (error) {
    next(error);
  }
}

const courseControllers = {
  handleCreateCourse,
  handleGetCourses,
  handleGetCourseBySlug,
  handleCreateReview,
};
export default courseControllers;
