import express, { Application, Request, Response } from 'express';
import courseCategoryRoutes from './routes/courseCategory.route';
const app: Application = express();

/** Application Regular Middlewares */
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Node Typescript Clean Template Application!');
});

/** Application Routes */
app.use('/api/v1/course-categories', courseCategoryRoutes);

export default app;
