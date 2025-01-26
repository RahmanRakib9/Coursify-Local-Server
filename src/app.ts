import express, { Application, Request, Response } from 'express';
import courseCategoryRoutes from './routes/courseCategory.route';
import courseRoutes from './routes/course.route';
import reviewRoutes from './routes/review.route';
import notFoundHandler from './middlewares/notFoundHandler';
import globalErrorHandler from './middlewares/globalErrorHandler';
import userRoutes from './routes/user.route';
import authRoutes from './routes/auth.route';
const app: Application = express();
import cookieParser = require('cookie-parser');
import cors from 'cors';
import dataRetentionRoutes from './routes/retention.route';
import './cron/deleteExpiredUsers.cron';

/** Application Regular Middlewares */
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Coursify-Local-Server');
});

/** Application Routes */
app.use('/api/v1/categories', courseCategoryRoutes);

app.use('/api/v1/courses', courseRoutes);

app.use('/api/v1/reviews', reviewRoutes);

app.use('/api/v1/users', userRoutes);

app.use('/api/v1/auth', authRoutes);

app.use('/api/v1/retentions', dataRetentionRoutes);

/**Global Error Handler */
app.use(globalErrorHandler);

/**Not Found Handler */
app.use(notFoundHandler);

export default app;
