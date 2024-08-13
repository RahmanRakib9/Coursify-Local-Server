# Coursify Local Server

## Introduction
Coursify is designed to simplify the process of sharing and discovering online courses. Just like IMDB is a hub for movies, Coursify serves as a central platform where administrators can publish courses, and users can explore, review, and rate them. The platform also features a ranking system that highlights the best courses based on user ratings. Whether you're an educator looking to reach a wider audience or a learner seeking high-quality courses, Coursify aims to be the go-to solution.

## Table of Contents
- [Features](#features)
- [Technology Used](#technology-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Contact Information](#contact-information)

## Features

Coursify Local Server is a comprehensive course management platform designed to enable admins to publish courses, while users can explore, review, and rate these courses. It provides a structured and organized way to manage and interact with courses, categories, reviews, and users. Below are the key features of the platform

## 1. Course Management

- **Create, Retrieve, and Manage Courses**: Admins and Super Admins can create and manage courses, including details such as title, instructor, category, price, language, and duration.

- **Course Details**: Each course includes comprehensive information like start and end dates, provider details, tags, and a detailed description.
- **Best Course Feature**: Users can retrieve the best-rated course based on total ratings, allowing easy discovery of top-quality content.

## 2. Category Management

- **Organized Course Categories**: Admins can create, retrieve, update, and delete course categories, allowing for easy categorization and filtering of courses.

- **Category Search**: Users can search for courses based on specific categories, making navigation more user-friendly

## 3. Review System

- **User Reviews and Ratings**: Registered users can review and rate courses, contributing to the overall rating system. The reviews are stored within the course entity, allowing for easy retrieval.

- **Review Management**: All reviews are accessible via public routes, providing transparency and feedback for other users.

## 4. User Management

- **User Roles**: The platform supports different user roles, including 'user', 'admin', and 'superAdmin', with varying levels of access and permissions.

- **User Authentication**: Secure user registration and login with role-based access control. The system also supports password change functionality and account management.

- **Admin Management**: Super Admins have the ability to create and manage admin accounts, ensuring that the platform is well-maintained and monitored.

## 5. Authentication and Security

- **Token-Based Authentication**: The platform uses JWT tokens for secure authentication. Access tokens are provided on login, and refresh tokens are managed via secure cookies.

- **Password Management**: Users can change their passwords securely, with the system verifying the old password before updating to a new one.

## Technologies Used

Coursify Local Server is built using the following technologies:

- **Node.js**: JavaScript runtime environment for executing JavaScript code server-side.
- **Express.js**: Web framework for Node.js, providing robust features for web and mobile applications.
- **TypeScript**: Superset of JavaScript that adds static types, enabling better tooling and error checking.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **JWT (jsonwebtoken)**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **bcrypt**: Library to help hash passwords.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **cookie-parser**: Middleware to parse cookies attached to the client request object.
- **dotenv**: Module to load environment variables from a `.env` file into `process.env`.
- **Nodemailer**: Module for Node.js to send emails.
- **Slugify**: Utility to generate slugs, typically for URLs.
- **Zod**: TypeScript-first schema declaration and validation library.
- **ESLint**: Linter tool for identifying and fixing problems in JavaScript and TypeScript code.
- **Prettier**: Code formatter for consistent code style across the project.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **yarn** (v1.x or higher)
- **MongoDB**: Make sure you have MongoDB installed and running, either locally or via a cloud service like MongoDB Atlas.

## Installation

**Clone the repository:**

   ```bash
   git clone https://github.com/RahmanRakib9/Coursify-Local-Server.git
   cd Coursify-Local-Server
   ```

## Environment Setup

Create a `.env` file in the root of your project and configure it with the following environment variables.Below is an example template:

```plaintext
# MongoDB connection string
DATABASE_URL=your_mongodb_connection_string

# Server port
PORT=your_server_port

# Environment mode
ENV=development_or_production

# Access token settings
ACCESS_TOKEN_SECRET_KEY=your_access_token_secret
ACCESS_TOKEN_EXPIRES_IN=token_expiration_time

# Refresh token settings
REFRESH_TOKEN_SECRET_KEY=your_refresh_token_secret
REFRESH_TOKEN_EXPIRES_IN=token_expiration_time

# Bcrypt settings
BCRYPT_SALT_ROUND=your_salt_round_value

# Password reset settings
FORGET_PASSWORD_SECRET_KEY=your_forget_password_secret
FORGET_PASSWORD_TOKEN_EXPIRES_IN=token_expiration_time
RESET_PASS_UI_LINK=your_reset_password_ui_link

# Email credentials for password reset
RESET_PASS_USER=your_email_address
RESET_PASS_USER_PASS=your_email_password
RESET_EMAIL_PORT=email_port_number

# Super admin credentials
SUPER_ADMIN_USERNAME=your_super_admin_username
SUPER_ADMIN_EMAIL=your_super_admin_email
SUPER_ADMIN_PASSWORD=your_super_admin_password
```

## Usage

Once you have set up your environment and installed the necessary dependencies, you can start using the Coursify Local Server. Follow these steps to get your server up and running:

### Starting the Server

To start the server in development mode, which provides live reloading and debugging support, use the following command:

```bash
npm run start:dev
# or
yarn start:dev
```

## Deployment

Coursify Local Server is deployed and accessible on Vercel. You can view the live project at the following URL:

[Live Project on Vercel](https://learnify-local-server.vercel.app/)

## API Documentation

Detailed API documentation is provided in a separate Google Docs document. This includes comprehensive information about API endpoints, data modeling, request and response formats, and other technical details. 

To view the detailed project requirement analysis, click on the link below:

[Project Requirement Analysis Document](https://docs.google.com/document/d/19cejsNAUU0yDexwQ1ArW-j_T2SEuy34wmdKJwrxrTrQ/edit?usp=sharing)


## Testing

Automated tests are planned for the project. Testing will be added to ensure the reliability and functionality of the server. More details will be provided once the testing framework and tests are implemented.

## Contact Information

For questions, feedback, or support, please contact:

Rakibur Rahman Rakib
[Email](rakibur.rahman.rakibb@gmail.com)
[Linkedin](https://www.linkedin.com/in/rahmanrakib9/)
