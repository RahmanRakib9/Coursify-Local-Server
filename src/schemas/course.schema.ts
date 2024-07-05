import { z } from 'zod';

const createCourseSchema = z.object({
  title: z.string().trim().min(1, 'Course is required'),
  instructor: z.string().trim().min(1, 'Instructor name is required'),
  categoryId: z.string().optional(),
  price: z.number().positive({ message: 'Price must be positive' }),
  tags: z.array(
    z.object({
      name: z.string().trim().min(1, 'Tag name is required'),
      isDeleted: z.boolean(),
    }),
  ),
  startDate: z.string(),
  endDate: z.string(),
  language: z.string().trim().min(1, 'Language is required'),
  provider: z.string().trim().min(1, 'Provider name is required'),
  details: z.object({
    level: z.string().trim().min(1, 'Level is required'),
    description: z.string().trim().min(1, 'Description is required'),
  }),
});

const courseValidation = {
  createCourseSchema,
};

export default courseValidation;
