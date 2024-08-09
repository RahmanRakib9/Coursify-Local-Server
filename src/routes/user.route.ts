import express from 'express';
import userControllers from '../controllers/user.controller';

const router = express.Router();

router.get('/', userControllers.handleGetUsers);

router.get('/me', userControllers.handleGetMe);

router.get('/:userId', userControllers.handleGetUser);

router.delete('/:userId', userControllers.handleDeleteUser);

router.patch('/:userId', userControllers.handleUpdateUser);

const userRoutes = router;
export default userRoutes;
