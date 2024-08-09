/* eslint-disable no-undef */
import path from 'path';
import dotenv from 'dotenv';

// join cwd and .env file
const envPath = path.join(process.cwd(), '.env');

// Load environment variables from the .env file
dotenv.config({ path: envPath });

// now we can access our environment variables from this file and to access those variables from anywhere in our application we have to export that variables from here

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  env: process.env.ENV,
  access_token_secret_key: process.env.ACCESS_TOKEN_SECRET_KEY,
  refresh_token_secret_key: process.env.REFRESH_TOKEN_SECRET_KEY,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
  forget_password_secret_key: process.env.FORGET_PASSWORD_SECRET_KEY,
  reset_pass_ui_link: process.env.RESET_PASS_UI_LINK,
  reset_pass_user: process.env.RESET_PASS_USER,
  reset_pass_user_pass: process.env.RESET_PASS_USER_PASS,
  reset_email_port: process.env.RESET_EMAIL_PORT,
};
