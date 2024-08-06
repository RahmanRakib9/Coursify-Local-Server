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

const userServices = {
  createUser,
  getUsers,
};
export default userServices;
