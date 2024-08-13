import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import userServices from '../services/user.service';
import ApiError from '../errors/apiError';
import userValidation from '../schemas/user.schema';

async function handleCreateAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const createAdminPayload = req.body;
    userValidation.createUserSchema.parse(createAdminPayload);
    const admin = await userServices.createAdmin(createAdminPayload);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'Admin Created Successfully!',
      admin,
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
      message: 'Users Retrieved Successfully!',
      users,
    });
  } catch (error) {
    next(error);
  }
}

async function handleGetMe(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        'You are Unauthorized to access this route!',
      );
    }

    const user = await userServices.getMe(token as string);

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

async function handleBlockUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    await userServices.blockUser(req.params.userId);

    res.status(httpStatus.OK).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User Blocked successfully',
    });
  } catch (error) {
    next(error);
  }
}

const userControllers = {
  handleCreateAdmin,
  handleGetUsers,
  handleGetMe,
  handleGetUser,
  handleDeleteUser,
  handleUpdateUser,
  handleBlockUser,
};
export default userControllers;
