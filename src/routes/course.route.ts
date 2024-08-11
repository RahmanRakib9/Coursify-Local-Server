import express from 'express';
import courseControllers from '../controllers/course.controller';
import { authorize } from '../middlewares/authorization';
import { User_Role } from '../constants/user.constant';

const router = express.Router();

router.get('/best', courseControllers.handleGetBestCourseByTotalRating);

router.post(
  '/',
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  courseControllers.handleCreateCourse,
);

router.get('/', courseControllers.handleGetCourses);

router.get('/:slug', courseControllers.handleGetCourseBySlug);

router.post(
  '/:slug/reviews',
  authorize(User_Role.USER),
  courseControllers.handleCreateReview,
);

router.get('/:slug/reviews', courseControllers.handleGetCourseReviews);

const courseRoutes = router;
export default courseRoutes;
