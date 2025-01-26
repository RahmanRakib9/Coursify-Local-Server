import { User } from '../models/user.model';
import cron from 'node-cron';

export const deleteExpireUsers = async () => {
  try {
    console.log('Running the delete expire users cron job...!');
    const currentDate = new Date();

    // Find users whose expireAt date has passed
    const expiredUser = await User.find({ expireAt: { $lte: currentDate } });

    if (expiredUser.length === 0) {
      console.log('No expired users to delete.');
      return;
    }

    // delete the expired users
    await User.deleteMany({ expireAt: { $lte: currentDate } });
  } catch (error) {
    console.log('An error from the delete expire users cron job!', error);
  }
};

// Schedule the task to run every Friday at 6 PM
cron.schedule('0 18 * * 5', async () => {
  await deleteExpireUsers();
});
