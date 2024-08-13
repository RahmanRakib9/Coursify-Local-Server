# Coursify Local Server

## Introduction
Coursify is designed to simplify the process of sharing and discovering online courses. Just like IMDB is a hub for movies, Coursify serves as a central platform where administrators can publish courses, and users can explore, review, and rate them. The platform also features a ranking system that highlights the best courses based on user ratings. Whether you're an educator looking to reach a wider audience or a learner seeking high-quality courses, Coursify aims to be the go-to solution.

## Table of Contents
- [Technology Used](#technology-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Contact Information](#contact-information)

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



