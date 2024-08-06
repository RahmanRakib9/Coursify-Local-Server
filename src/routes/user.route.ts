import express from 'express';
import userControllers from '../controllers/user.controller';

const router = express.Router();

router.post('/', userControllers.handleCreateUser);

const userRoutes = router;
export default userRoutes;
