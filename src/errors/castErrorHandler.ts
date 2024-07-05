import mongoose from 'mongoose';
import { TErrorSources, TGenericResponse } from './error.interface';
import httpStatus from 'http-status';

const handleCastError = (error: mongoose.Error.CastError): TGenericResponse => {
  const errorSources: TErrorSources = [
    {
      path: error.path,
      message: error.message,
    },
  ];
  const statusCode = httpStatus.BAD_REQUEST;

  return {
    statusCode,
    message: 'Invalid ID',
    errorSources,
  };
};
export default handleCastError;
