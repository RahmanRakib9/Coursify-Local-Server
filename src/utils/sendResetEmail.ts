import nodemailer from 'nodemailer';
import config from '../app/config/config';

export const sendResetEmail = async (receiver: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: Number(config.reset_email_port),
    secure: config.env == 'production', // development phase secure property should be false otherwise it will not work
    auth: {
      user: config.reset_pass_user as string,
      pass: config.reset_pass_user_pass as string,
    },
  });
  await transporter.sendMail({
    from: 'Rahman Rakib <rakib15-6191@s.diu.edu.bd>',
    to: receiver, // could be a list of receivers
    subject: 'Reset Your Password at  Coursify-Local-Server within 10 minutes!',
    text: 'Hi there,Please Reset Your Password',
    html: html, //dynamic html
  });
};
