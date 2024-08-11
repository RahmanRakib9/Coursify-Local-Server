import mongoose from 'mongoose';
import app from './app';
import config from './app/config/config';
import seedSuperAdmin from './DB/seedAdmin';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    // create a super admin while creating a database connection
    await seedSuperAdmin();
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
