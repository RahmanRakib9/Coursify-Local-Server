export interface ILoginUser {
  email: string;
  password: string;
}

export interface IChangePassword {
  email: string;
  oldPassword: string;
  newPassword: string;
}
