import IUser from '../interfaces/user.interface';
import { User } from '../models/user.model';

const getUsers = async () => {
  const users = await User.find();
  return users;
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

const userServices = {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
export default userServices;
