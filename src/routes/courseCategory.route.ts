import express from 'express';
import courseCategoryControllers from '../controllers/courseCategory.controller';

const router = express.Router();

router.post(
  '/create-course-category',
  courseCategoryControllers.handleCreateCourseCategory,
);

const courseCategoryRoutes = router;
export default courseCategoryRoutes;
