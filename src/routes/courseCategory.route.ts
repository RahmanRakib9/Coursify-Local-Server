import express from 'express';
import courseCategoryControllers from '../controllers/courseCategory.controller';

const router = express.Router();

router.post('/', courseCategoryControllers.handleCreateCourseCategory);

router.get('/', courseCategoryControllers.handleGetAllCategories);

const courseCategoryRoutes = router;
export default courseCategoryRoutes;
