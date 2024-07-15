import express from 'express';
import courseControllers from '../controllers/course.controller';

const router = express.Router();

router.get('/best', courseControllers.handleGetBestCourseByTotalRating);

router.post('/', courseControllers.handleCreateCourse);

router.get('/', courseControllers.handleGetCourses);

router.get('/:slug', courseControllers.handleGetCourseBySlug);

router.post('/:slug/reviews', courseControllers.handleCreateReview);

router.get('/:slug/reviews', courseControllers.handleGetCourseReviews);

const courseRoutes = router;
export default courseRoutes;
