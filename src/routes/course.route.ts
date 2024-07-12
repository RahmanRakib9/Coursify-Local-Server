import express from 'express';
import courseControllers from '../controllers/course.controller';

const router = express.Router();

router.post('/', courseControllers.handleCreateCourse);

router.get('/', courseControllers.handleGetCourses);

router.get('/:slug', courseControllers.handleGetCourseBySlug);

const courseRoutes = router;
export default courseRoutes;
