import express from 'express';
import courseControllers from '../controllers/course.controller';

const router = express.Router();

router.post('/', courseControllers.handleCreateCourse);

router.get('/', courseControllers.handleGetCourses);

router.get('/:slug', courseControllers.handleGetCourseBySlug);

router.post('/:slug/reviews', courseControllers.handleCreateReview);

const courseRoutes = router;
export default courseRoutes;
