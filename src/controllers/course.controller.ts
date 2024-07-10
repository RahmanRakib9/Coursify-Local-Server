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

async function handleGetCourseWithReview(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const courseId = req.params.courseId;
    const course = await courseServices.getCourseWithReviews(courseId);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Course and Reviews retrieved successfully',
      course,
    });
  } catch (error) {
    next(error);
  }
}

const courseControllers = {
  handleCreateCourse,
  handleGetCourses,
  handleGetCourseWithReview,
};
export default courseControllers;
