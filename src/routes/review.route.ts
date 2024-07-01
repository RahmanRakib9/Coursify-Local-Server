import express from 'express';
import reviewControllers from '../controllers/review.controller';

const router = express.Router();

router.post('/create-review', reviewControllers.handleCreateReview);

const reviewRoutes = router;
export default reviewRoutes;
