import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
// This function will returns another function that acts as an actual middleware
// algorithm for validate incoming request
// 1.perform validation (match the as expected req.body)
// 2.if everything OK then call the next function or otherwise handle the error globally

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default validateRequest;
