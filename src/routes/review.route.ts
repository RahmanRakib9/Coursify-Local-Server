import express from 'express';
import reviewControllers from '../controllers/review.controller';

const router = express.Router();

router.post('/create-review', reviewControllers.handleCreateReview);

router.get('/', reviewControllers.handleGetReviews);

const reviewRoutes = router;
export default reviewRoutes;
