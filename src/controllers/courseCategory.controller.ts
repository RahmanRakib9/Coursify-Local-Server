import { NextFunction, Request, Response } from 'express';
import courseCategoryServices from '../services/courseCategory.service';

async function handleCreateCourseCategory(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const courseCategoryPayload = req.body;
    const courseCategory = await courseCategoryServices.createCourseCategory(
      courseCategoryPayload,
    );

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Category created successfully',
      courseCategory,
    });
  } catch (error) {
    next(error);
  }
}

const courseCategoryControllers = {
  handleCreateCourseCategory,
};
export default courseCategoryControllers;
