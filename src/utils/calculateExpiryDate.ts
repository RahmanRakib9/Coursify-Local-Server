export const calculateExpiryDate = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 30);
  return currentDate;
};
