import { z } from 'zod';

const createCourseCategorySchema = z.object({
  name: z.string().trim().min(1, 'Course Category is required'),
});

const updateCourseCategorySchema = z.object({
  name: z.string().trim().optional(),
});

const courseCategoryValidation = {
  createCourseCategorySchema,
  updateCourseCategorySchema,
};

export default courseCategoryValidation;
