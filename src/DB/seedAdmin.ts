import config from '../app/config/config';
import { User_Role, User_Status } from '../constants/user.constant';
import { User } from '../models/user.model';

const superAdmin = {
  username: config.super_admin_username as string,
  email: config.super_admin_email as string,
  password: config.super_admin_password as string,
  role: User_Role.SUPER_ADMIN,
  status: User_Status.ACTIVE,
};

const seedSuperAdmin = async () => {
  const isSuperAdminExist = await User.findOne({ role: superAdmin.role });

  if (!isSuperAdminExist) {
    await User.create(superAdmin);
  }
};
export default seedSuperAdmin;
