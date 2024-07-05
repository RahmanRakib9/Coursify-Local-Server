import express from 'express';
import courseControllers from '../controllers/course.controller';

const router = express.Router();

router.post('/create-course',courseControllers.handleCreateCourse);

router.get('/', courseControllers.handleGetCourses);

router.get('/:courseId', courseControllers.handleGetCourseWithReview);

const courseRoutes = router;
export default courseRoutes;