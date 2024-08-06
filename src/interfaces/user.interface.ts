import { User_Role, User_Status } from '../constants/user.constant';

interface IUser {
  username: string;
  email: string;
  password: string;
  passwordChangedAT?: Date;
  role: keyof typeof User_Role;
  status: keyof typeof User_Status;
}
export default IUser;
