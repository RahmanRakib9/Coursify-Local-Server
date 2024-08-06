import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import userValidation from '../schemas/user.schema';
import userServices from '../services/user.service';

async function handleCreateUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const userPayload = req.body;
    userValidation.createUserSchema.parse(userPayload);

    const user = await userServices.createUser(userPayload);

    res.status(httpStatus.CREATED).json({
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'User created successfully',
      user,
    });
  } catch (error) {
    next(error);
  }
}

async function handleGetUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await userServices.getUsers();

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Users Retrieved successfully',
      users,
    });
  } catch (error) {
    next(error);
  }
}

async function handleGetUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await userServices.getUser(req.params.userId);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User Retrieved successfully',
      user,
    });
  } catch (error) {
    next(error);
  }
}

async function handleDeleteUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    await userServices.deleteUser(req.params.userId);

    res.end();
  } catch (error) {
    next(error);
  }
}

async function handleUpdateUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const userId = req.params.userId;
    const userPayload = req.body;
    const updatedUser = await userServices.updateUser(userId, userPayload);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User Updated successfully',
      updatedUser,
    });
  } catch (error) {
    next(error);
  }
}

const userControllers = {
  handleCreateUser,
  handleGetUsers,
  handleGetUser,
  handleDeleteUser,
  handleUpdateUser,
};
export default userControllers;
