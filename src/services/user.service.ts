import IUser from '../interfaces/user.interface';
import { User } from '../models/user.model';

const createUser = async (userPayload: IUser) => {
  const user = await User.create(userPayload);
  return user;
};

const getUsers = async () => {
  const users = await User.find();
  return users;
};

const getUser = async (userId: string) => {
  const user = await User.findById(userId);
  return user;
};

const userServices = {
  createUser,
  getUsers,
  getUser,
};
export default userServices;
