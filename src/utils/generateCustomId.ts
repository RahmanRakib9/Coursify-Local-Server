import { User_Role } from '../constants/user.constant';
import { User } from '../models/user.model';

export const generateCustomId = async (
  role: keyof typeof User_Role,
): Promise<string> => {
  const prefix = role.toLowerCase();
  const lastUser = await User.findOne({ role })
    .sort({ createdAt: -1 })
    .select('id');

  let idNumber = 1;

  if (lastUser && lastUser.id) {
    const lastIdNumber = parseInt(lastUser.id.split(prefix)[1], 10);
    idNumber = lastIdNumber + 1;
  }

  return `${prefix}${String(idNumber).padStart(3, '0')}`;
};
