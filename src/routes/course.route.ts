import express from 'express';
import courseCategoryControllers from '../controllers/courseCategory.controller';

const router = express.Router();

router.post(
  '/create-course',
  courseCategoryControllers.handleCreateCourseCategory,
);

const courseRoutes = router;
export default courseRoutes;
