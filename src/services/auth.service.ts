import httpStatus from 'http-status';
import ApiError from '../errors/apiError';
import IUser from '../interfaces/user.interface';
import { User } from '../models/user.model';
import { User_Role, User_Status } from '../constants/user.constant';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../app/config/config';
import { comparePasswordFields } from '../utils/comparePassword';
import { IChangePassword, ILoginUser } from '../interfaces/auth.interface';
import bcrypt from 'bcrypt';

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

  const isPasswordMatched = await comparePasswordFields(
    userLoginPayload.password,
    user.password,
  );

  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect password!');
  }

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

const changePassword = async (changePasswordPayload: IChangePassword) => {
  const user = await User.findOne({ email: changePasswordPayload.email });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User Not Found!');
  }

  if (user.status === User_Status.BLOCKED) {
    throw new ApiError(httpStatus.FORBIDDEN, 'User is Blocked!');
  }

  const isPasswordMatched = await comparePasswordFields(
    changePasswordPayload.oldPassword,
    user.password,
  );

  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect Old Password!');
  }

  const hashedPassword = await bcrypt.hash(
    changePasswordPayload.newPassword,
    Number(config.bcrypt_salt_round),
  );

  await User.updateOne(
    { email: user.email },
    { $set: { password: hashedPassword } },
  );
};

// if refresh token is expired then this refresh token route will call from the client side
const generateNewRefreshToken = async (token: string) => {
  const verifiedToken = jwt.verify(
    token,
    config.refresh_token_secret_key as string,
  ) as JwtPayload;

  const { email } = verifiedToken;
  const user = await User.findOne(email);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User Not Found!');
  }

  if (user.status === User_Status.BLOCKED) {
    throw new ApiError(httpStatus.FORBIDDEN, 'User is Blocked!');
  }

  //create jwt payload for regenerating refresh token
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const refreshToken = jwt.sign(
    jwtPayload,
    config.refresh_token_secret_key as string,
    { expiresIn: '10d' },
  );

  return { refreshToken };
};

const authServices = {
  registerUser,
  loginUser,
  changePassword,
  generateNewRefreshToken,
};
export default authServices;
