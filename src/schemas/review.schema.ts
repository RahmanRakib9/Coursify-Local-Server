import { z } from 'zod';

const createReviewSchema = z.object({
  courseId: z.string().optional(),
  rating: z.number().positive({ message: 'Rating must be positive' }),
  review: z.string().trim(),
});

const reviewValidation = {
  createReviewSchema,
};

export default reviewValidation;
