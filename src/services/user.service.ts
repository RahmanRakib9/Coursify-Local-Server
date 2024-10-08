import IUser from '../interfaces/user.interface';
import { User } from '../models/user.model';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../app/config/config';
import httpStatus from 'http-status';
import ApiError from '../errors/apiError';
import { User_Role, User_Status } from '../constants/user.constant';
import { generateCustomId } from '../utils/generateCustomId';

const createAdmin = async (createAdminPayload: IUser) => {
  const admin = await User.findOne({ email: createAdminPayload.email });

  if (admin) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Admin With this email already exist!',
    );
  }

  createAdminPayload.role = User_Role.ADMIN;

  // Generated custom id
  const customId = await generateCustomId(createAdminPayload.role);
  createAdminPayload.id = customId;

  const newAdmin = await User.create(createAdminPayload);
  return newAdmin;
};

const getUsers = async () => {
  const users = await User.find();
  return users;
};

const getMe = async (token: string) => {
  const verifiedToken = jwt.verify(
    token,
    config.access_token_secret_key as string,
  );
  const { email, role } = verifiedToken as JwtPayload;
  let user = null;

  if (role == 'USER') {
    user = await User.findOne({ email: email });
  }
  if (role == 'ADMIN') {
    user = await User.findOne({ email: email });
  }
  if (role == 'SUPER_ADMIN') {
    user = await User.findOne({ email: email });
  }

  return user;
};

const getUser = async (userId: string) => {
  const user = await User.findById(userId);
  return user;
};

const deleteUser = async (userId: string) => {
  await User.deleteOne({ userId });
  return null;
};

const updateUser = async (userId: string, userPayload: IUser) => {
  const updatedUser = await User.updateOne(
    { userId },
    { userPayload },
    { new: true },
  );
  return updatedUser;
};

const blockUser = async (userId: string) => {
  const user = await User.findOne({ _id: userId });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User Not Found!');
  }

  await User.findByIdAndUpdate(userId, { status: User_Status.BLOCKED });
};

const userServices = {
  createAdmin,
  getUsers,
  getMe,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
};
export default userServices;
