import express from 'express';
import retentionUserControllers from '../controllers/retention.controller';

const router = express.Router();

router.patch('/users/:id', retentionUserControllers.handleRetainUser);

router.patch('/users/:id/recover', retentionUserControllers.handleRecoverUser);

const dataRetentionRoutes = router;
export default dataRetentionRoutes;
