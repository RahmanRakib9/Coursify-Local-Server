import { z } from 'zod';

const createReviewSchema = z.object({
  courseId: z.string().optional(),
  rating: z.number().positive({ message: 'Rating must be positive' }),
  review: z.string().trim(),
});

const updateReviewSchema = z.object({
  courseId: z.string().optional(),
  rating: z
    .number()
    .positive({ message: 'Rating must be positive' })
    .optional(),
  review: z.string().trim().optional(),
});

const reviewValidation = {
  createReviewSchema,
  updateReviewSchema,
};

export default reviewValidation;
