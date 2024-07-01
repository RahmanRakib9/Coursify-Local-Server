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

async function handleGetAllCategories(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const categories = await courseCategoryServices.getAllCategories();

    res.status(200).json({
      success: true,
      statusCode: 201,
      message: 'Categories retrieved successfully',
      categories,
    });
  } catch (error) {
    next(error);
  }
}

const courseCategoryControllers = {
  handleCreateCourseCategory,
  handleGetAllCategories,
};
export default courseCategoryControllers;
