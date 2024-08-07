import { NextFunction, Request, Response } from 'express';
import userValidation from '../schemas/user.schema';
import authServices from '../services/auth.service';
import httpStatus from 'http-status';
import config from '../app/config/config';
import authValidation from '../schemas/auth.schema';

async function handleRegisterUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const userPayload = req.body;
    userValidation.createUserSchema.parse(userPayload);

    const user = await authServices.registerUser(userPayload);

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

async function handleLoginUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const userLoginPayload = req.body;

    authValidation.userLoginSchema.parse(userLoginPayload);

    const { accessToken, refreshToken } =
      await authServices.loginUser(userLoginPayload);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: config.env == 'production',
    });

    res.status(httpStatus.CREATED).json({
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'User Logged-in successfully',
      accessToken,
    });
  } catch (error) {
    next(error);
  }
}

const authControllers = {
  handleRegisterUser,
  handleLoginUser,
};
export default authControllers;
