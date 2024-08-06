import { model, Schema } from 'mongoose';
import IUser from '../interfaces/user.interface';
import { User_Role, User_Status } from '../constants/user.constant';

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, 'username is Required!'],
  },
  email: {
    type: String,
    required: [true, 'email is Required!'],
  },
  password: {
    type: String,
    required: [true, 'password is Required!'],
  },
  passwordChangedAT: Date,
  role: {
    type: String,
    enum: Object.keys(User_Role),
  },
  status: {
    type: String,
    enum: Object.keys(User_Status),
    default: User_Status.ACTIVE,
  },
});

export const User = model('User', userSchema);
