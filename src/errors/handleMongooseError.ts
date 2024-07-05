import mongoose from 'mongoose';
import { TErrorSources } from './error.interface';
import httpStatus from 'http-status';

const handleMongooseError = (error: mongoose.Error.ValidationError) => {
  const errorSources: TErrorSources = Object.values(error.errors).map(
    (value: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: value?.path,
        message: value?.message,
      };
    },
  );
  const statusCode = httpStatus.BAD_REQUEST;
  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};
export default handleMongooseError;
