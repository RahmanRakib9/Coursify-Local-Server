import express from 'express';
import userControllers from '../controllers/user.controller';
import { authorize } from '../middlewares/authorization';
import { User_Role } from '../constants/user.constant';

const router = express.Router();

router.post(
  '/create-admin',
  authorize(User_Role.SUPER_ADMIN),
  userControllers.handleCreateAdmin,
);

router.get(
  '/',
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  userControllers.handleGetUsers,
);

router.get(
  '/me',
  authorize(User_Role.USER, User_Role.ADMIN, User_Role.SUPER_ADMIN),
  userControllers.handleGetMe,
);

router.get(
  '/:userId',
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  userControllers.handleGetUser,
);

router.delete(
  '/:userId',
  authorize(User_Role.ADMIN, User_Role.SUPER_ADMIN),
  userControllers.handleDeleteUser,
);

router.patch(
  '/:userId',
  authorize(User_Role.USER, User_Role.ADMIN, User_Role.SUPER_ADMIN),
  userControllers.handleUpdateUser,
);

const userRoutes = router;
export default userRoutes;
