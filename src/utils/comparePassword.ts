import bcrypt from 'bcrypt';

export const comparePasswordFields = async (
  plainTextPassword: string,
  hashedPassword: string,
) => {
  const isPasswordMatched = await bcrypt.compare(
    plainTextPassword,
    hashedPassword,
  );
  return isPasswordMatched;
};
