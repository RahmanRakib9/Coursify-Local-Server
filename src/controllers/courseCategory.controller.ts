import { NextFunction, Request, Response } from 'express';
import courseCategoryServices from '../services/courseCategory.service';
import courseCategoryValidation from '../schemas/courseCategory.schema';
import httpStatus from 'http-status';

async function handleCreateCourseCategory(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const courseCategoryPayload = req.body;
    courseCategoryValidation.createCourseCategorySchema.parse(
      courseCategoryPayload,
    );
    const courseCategory = await courseCategoryServices.createCourseCategory(
      courseCategoryPayload,
    );

    res.status(httpStatus.CREATED).json({
      success: true,
      statusCode: httpStatus.CREATED,
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
    const categories = await courseCategoryServices.getAllCourseCategories();

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Categories retrieved successfully',
      categories,
    });
  } catch (error) {
    next(error);
  }
}

async function handleGetCategory(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const name = req.params.name;
    const category = await courseCategoryServices.getCourseCategory(name);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Category retrieved successfully',
      category,
    });
  } catch (error) {
    next(error);
  }
}

async function handleUpdateCourseCategory(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id = req.params.id;

    await courseCategoryServices.updateCourseCategory(id, req.body);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Course Category updated successfully',
    });
  } catch (error) {
    next(error);
  }
}

const courseCategoryControllers = {
  handleCreateCourseCategory,
  handleGetAllCategories,
  handleGetCategory,
  handleUpdateCourseCategory,
};
export default courseCategoryControllers;
