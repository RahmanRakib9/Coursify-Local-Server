import httpStatus from 'http-status';
import ApiError from '../errors/apiError';
import { User } from '../models/user.model';
import { calculateExpiryDate } from '../utils/calculateExpiryDate';

const retainUser = async (id: string) => {
  const user = await User.findOne({ _id: id });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User Not Found!');
  }

  const setExpireDate = calculateExpiryDate();

  await User.findByIdAndUpdate(
    id,
    { isDeleted: 0, expireAt: setExpireDate },
    { new: true },
  );
};

const retainUserServices = {
  retainUser,
};
export default retainUserServices;
