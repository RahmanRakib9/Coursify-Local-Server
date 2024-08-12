import express from 'express';
import courseCategoryControllers from '../controllers/courseCategory.controller';
import { authorize } from '../middlewares/authorization';
import { User_Role } from '../constants/user.constant';

const router = express.Router();

router.post(
  '/',
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  courseCategoryControllers.handleCreateCourseCategory,
);

router.get('/', courseCategoryControllers.handleGetAllCategories);

router.get('/:name', courseCategoryControllers.handleGetCategory);

router.patch('/:id', courseCategoryControllers.handleUpdateCourseCategory);

const courseCategoryRoutes = router;
export default courseCategoryRoutes;
