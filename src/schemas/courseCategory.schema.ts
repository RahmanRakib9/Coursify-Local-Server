import { z } from 'zod';

const createCourseCategorySchema = z.object({
  name: z.string().trim().min(1, 'Course Category is required'),
});

const courseCategoryValidation = {
  createCourseCategorySchema,
};

export default courseCategoryValidation;
