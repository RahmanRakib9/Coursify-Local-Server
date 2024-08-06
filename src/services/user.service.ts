import IUser from '../interfaces/user.interface';
import { User } from '../models/user.model';

const createUser = async (userPayload: IUser) => {
  const user = await User.create(userPayload);
  return user;
};

const userServices = {
  createUser,
};
export default userServices;
