import httpStatus from 'http-status';
import ApiError from '../errors/apiError';
import IUser from '../interfaces/user.interface';
import { User } from '../models/user.model';
import { User_Role, User_Status } from '../constants/user.constant';
import ILoginUser from '../interfaces/auth.interface';
import jwt from 'jsonwebtoken';
import config from '../app/config/config';

const registerUser = async (userPayload: IUser) => {
  const user = await User.findOne({ email: userPayload.email });

  if (user) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'User With this email already exist!',
    );
  }

  userPayload.role = User_Role.USER;

  const newUser = await User.create(userPayload);
  return newUser;
};

const loginUser = async (userLoginPayload: ILoginUser) => {
  const user = await User.findOne({ email: userLoginPayload.email });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User Not Found!');
  }

  if (user.status === User_Status.BLOCKED) {
    throw new ApiError(httpStatus.FORBIDDEN, 'User is Blocked!');
  }

  //TODO: compare the password

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(
    jwtPayload,
    config.access_token_secret_key as string,
    { expiresIn: '1d' },
  );
  const refreshToken = jwt.sign(
    jwtPayload,
    config.refresh_token_secret_key as string,
    { expiresIn: '10d' },
  );

  return { accessToken, refreshToken };
};

const authServices = {
  registerUser,
  loginUser,
};
export default authServices;
