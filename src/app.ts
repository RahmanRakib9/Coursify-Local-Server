import express, { Application, Request, Response } from 'express';
import courseCategoryRoutes from './routes/courseCategory.route';
import courseRoutes from './routes/course.route';
import reviewRoutes from './routes/review.route';
import notFoundHandler from './middlewares/notFoundHandler';
import globalErrorHandler from './middlewares/globalErrorHandler';
const app: Application = express();

/** Application Regular Middlewares */
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Node Typescript Clean Template Application!');
});

/** Application Routes */
app.use('/api/v1/categories', courseCategoryRoutes);

app.use('/api/v1/courses', courseRoutes);

app.use('/api/v1/reviews', reviewRoutes);

/**Global Error Handler */
app.use(globalErrorHandler);

/**Not Found Handler */
app.use(notFoundHandler);

export default app;
