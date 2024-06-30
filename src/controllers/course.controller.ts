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

const courseControllers = {
  handleCreateCourse,
};
export default courseControllers;
