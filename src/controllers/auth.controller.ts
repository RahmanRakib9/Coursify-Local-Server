import { NextFunction, Request, Response } from 'express';
import userValidation from '../schemas/user.schema';
import authServices from '../services/auth.service';
import httpStatus from 'http-status';

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

const authControllers = {
  handleRegisterUser,
};
export default authControllers;
