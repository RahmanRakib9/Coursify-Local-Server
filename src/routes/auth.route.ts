import express from 'express';
import authControllers from '../controllers/auth.controller';
import { authorize } from '../middlewares/authorization';
import { User_Role } from '../constants/user.constant';

const router = express.Router();

router.post('/register', authControllers.handleRegisterUser);

router.post('/login', authControllers.handleLoginUser);

router.patch('/change-password',authorize(User_Role.USER,User_Role.ADMIN,User_Role.SUPER_ADMIN), authControllers.handleChangePassword);

router.post('/forget-password',authorize(User_Role.USER,User_Role.ADMIN,User_Role.SUPER_ADMIN), authControllers.handleForgetPassword);

router.post('/reset-password',authorize(User_Role.USER,User_Role.ADMIN,User_Role.SUPER_ADMIN), authControllers.handleForgetPassword);

// if existing refresh token is expired then this refresh token route will call from the client side
router.post('/refresh-token', authControllers.handleGenerateNewRefreshToken);

const authRoutes = router;
export default authRoutes;
