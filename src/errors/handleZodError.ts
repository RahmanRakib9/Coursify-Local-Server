import httpStatus from 'http-status';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSources } from './error.interface';

const handleZodError = (error: ZodError) => {
  const errorSources: TErrorSources = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = httpStatus.BAD_REQUEST;

  return {
    statusCode,
    message: 'validation Error',
    errorSources,
  };
};
export default handleZodError;
