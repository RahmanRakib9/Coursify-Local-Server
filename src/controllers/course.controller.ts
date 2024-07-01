import { NextFunction, Request, Response } from 'express';
import courseServices from '../services/course.service';

async function handleCreateCourse(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const coursePayload = req.body;
    const course = await courseServices.createCourse(coursePayload);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Course created successfully',
      course,
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

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Course and Reviews retrieved successfully',
      course,
    });
  } catch (error) {
    next(error);
  }
}

const courseControllers = {
  handleCreateCourse,
  handleGetCourseWithReview,
};
export default courseControllers;
