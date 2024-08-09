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

const forgetPasswordSchema = z.object({
  email: z
    .string({ required_error: 'Email is Required!' })
    .email({ message: 'Invalid Email Address!' }),
});

const resetPasswordSchema = z.object({
  email: z
    .string({ required_error: 'Email is Required!' })
    .email({ message: 'Invalid Email Address!' }),
  newPassword: z.string({ required_error: 'New Password is Required!' }),
});

const authValidation = {
  userLoginSchema,
  changePasswordSchema,
  forgetPasswordSchema,
  resetPasswordSchema,
};
export default authValidation;
