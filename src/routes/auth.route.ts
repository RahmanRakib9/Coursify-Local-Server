import express from 'express';
import authControllers from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', authControllers.handleRegisterUser);

router.post('/login', authControllers.handleLoginUser);

router.patch('/change-password', authControllers.handleChangePassword);

router.post('/forget-password', authControllers.handleForgetPassword);

router.post('/reset-password', authControllers.handleForgetPassword);

// if existing refresh token is expired then this refresh token route will call from the client side
router.post('/refresh-token', authControllers.handleGenerateNewRefreshToken);

const authRoutes = router;
export default authRoutes;
