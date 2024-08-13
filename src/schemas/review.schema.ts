import { z } from 'zod';

const createReviewSchema = z.object({
  course: z.string().optional(),
  rating: z.number().positive({ message: 'Rating must be positive' }),
  review: z.string().trim(),
  user: z.string().optional(),
});

const updateReviewSchema = z.object({
  course: z.string().optional(),
  rating: z
    .number()
    .positive({ message: 'Rating must be positive' })
    .optional(),
  review: z.string().trim().optional(),
  user: z.string().optional(),
});

const reviewValidation = {
  createReviewSchema,
  updateReviewSchema,
};

export default reviewValidation;
