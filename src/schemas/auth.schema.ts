import { z } from 'zod';

const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const changePasswordSchema = z.object({
  email: z
    .string({ required_error: 'Old Password is Required!' })
    .email({ message: 'Invalid Email Address!' }),
  oldPassword: z.string({ required_error: 'Old Password is Required!' }),
  newPassword: z.string({ required_error: 'New Password is Required!' }),
});

const authValidation = {
  userLoginSchema,
  changePasswordSchema,
};
export default authValidation;
