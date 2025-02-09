/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import IUser from '../interfaces/user.interface';
import { User_Role, User_Status } from '../constants/user.constant';
import config from '../app/config/config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String, // custom server generated id
      requiredPaths: false,
    },
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
    isDeleted: {
      type: Number,
      enum: [0 | 1], //0 =deleted,1=not deleted
      default: 1,
    },
    expireAt: {
      type: Date,
      default: null,
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
