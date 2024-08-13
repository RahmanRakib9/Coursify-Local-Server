import { z } from 'zod';
import { User_Role, User_Status } from '../constants/user.constant';

const createUserSchema = z.object({
  id: z.string().optional(), //custom server generated id
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  passwordChangedAT: z.number().optional(),
  role: z.nativeEnum(User_Role).optional(),
  status: z.nativeEnum(User_Status).optional(),
});

const userValidation = {
  createUserSchema,
};
export default userValidation;
