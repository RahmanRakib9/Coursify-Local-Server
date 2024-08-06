import express from 'express';
import userControllers from '../controllers/user.controller';

const router = express.Router();

router.post('/', userControllers.handleCreateUser);

router.get('/', userControllers.handleGetUsers);

router.get('/:userId', userControllers.handleGetUser);

const userRoutes = router;
export default userRoutes;
