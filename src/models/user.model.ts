/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import IUser from '../interfaces/user.interface';
import { User_Role, User_Status } from '../constants/user.constant';
import config from '../app/config/config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser>(
  {
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
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
  const user = this;

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );

  next();
});

export const User = model('User', userSchema);
