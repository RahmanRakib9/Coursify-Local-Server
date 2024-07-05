import express, { Application, Request, Response } from 'express';
import courseCategoryRoutes from './routes/courseCategory.route';
import courseRoutes from './routes/course.route';
import reviewRoutes from './routes/review.route';
import notFoundHandler from './utils/notFoundHandler';
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


/**Not Found Handler */
app.use(notFoundHandler)

export default app;
