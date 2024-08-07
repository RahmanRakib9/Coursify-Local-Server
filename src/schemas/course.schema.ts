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
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
  endDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
  language: z.string().trim().min(1, 'Language is required'),
  provider: z.string().trim().min(1, 'Provider name is required'),
  details: z.object({
    level: z.string().trim().min(1, 'Level is required'),
    description: z.string().trim().min(1, 'Description is required'),
  }),
});

const updateCourseSchema = z.object({
  title: z.string().optional(),
  instructor: z.string().optional(),
  categoryId: z.string().optional(),
  price: z.number().positive({ message: 'Price must be positive' }).optional(),
  tags: z
    .array(
      z.object({
        name: z.string().trim(),
        isDeleted: z.boolean(),
      }),
    )
    .optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  language: z.string().trim().optional(),
  provider: z.string().trim().optional(),
  details: z.object({
    level: z.string().trim().optional(),
    description: z.string().trim().optional(),
  }),
});

const courseValidation = {
  createCourseSchema,
  updateCourseSchema,
};

export default courseValidation;
