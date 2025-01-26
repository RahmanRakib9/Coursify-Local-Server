import { User_Role, User_Status } from '../constants/user.constant';

interface IUser {
  id?: string; // custom server generated id
  username: string;
  email: string;
  password: string;
  passwordChangedAT?: Date;
  role: keyof typeof User_Role;
  status: keyof typeof User_Status;
  isDeleted: 0 | 1;
  expireAt: Date;
}
export default IUser;
