import express from 'express';
import authControllers from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', authControllers.handleRegisterUser);

router.post('/login', authControllers.handleLoginUser);

router.post('/refresh-token', authControllers.handleGenerateNewRefreshToken);

const authRoutes = router;
export default authRoutes;
