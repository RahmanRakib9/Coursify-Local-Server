import httpStatus from 'http-status';
import ApiError from '../errors/apiError';
import IUser from '../interfaces/user.interface';
import { User } from '../models/user.model';
import { User_Role } from '../constants/user.constant';

const registerUser = async (userPayload: IUser) => {
  const user = await User.findOne({ email: userPayload.email });

  if (user) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      'User With this email already exist!',
    );
  }

  userPayload.role = User_Role.USER;

  const newUser = await User.create(userPayload);
  return newUser;
};

const authServices = {
  registerUser,
};
export default authServices;
