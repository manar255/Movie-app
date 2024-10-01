
# Movie Website - Backend (Node.js API)

This is the backend API for the Movie Website project, built using Node.js, Express, and MongoDB. The API provides endpoints for user authentication, movie management, ratings, and more.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Live Demo](#live-demo)
- [Frontend Repository](#frontend-repository)

## Project Overview

This backend API powers a movie discovery platform, allowing users to browse movies, submit ratings, and manage their favorites or watch later lists. It includes user authentication using JWT and OAuth for Google login, and handles database operations with MongoDB.

## Features

- **User Authentication**: Sign up, login, and Google login (OAuth 2.0).
- **Movie Management**: Fetch, filter, and manage movies in the database.
- **Favorites & Watch Later**: Add and retrieve movies from user lists.
- **Ratings**: Submit, view, and aggregate movie ratings.
- **JWT Authentication**: Secure endpoints with JSON Web Tokens (JWT).

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (Database)
- **Mongoose** (ORM for MongoDB)
- **JWT** (Authentication)
- **Google OAuth** (Authentication)
- **Dotenv** (Environment variable management)

## Installation

To run the backend API locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/manar255/Movie-app.git
   cd movie-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```bash
   PORT=5000
   DATABASE=your_mongodb_connection_string
   DATABASE_PASSWORD=your_mongodb_password
   SECRET_KEY=your_jwt_secret
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

   The server will be running at `http://localhost:5000`.

## Usage

Once the backend server is running, it will provide several RESTful API endpoints for managing users, movies, and ratings. These endpoints are secured using JWT, and user authentication is required for many actions, such as submitting ratings or managing favorites.

## API Endpoints

### User Authentication

- **POST /auth/signUp** - Create a new user account.
- **POST /auth/signIn** - Log in with an email and password.
- **POST /auth/google** - Log in with Google OAuth.

### Movies

- **GET /movie/movies** - Fetch all movies.
- **GET /movies/:id** - Get details of a specific movie.
- **POST /movie** - Add a new movie (Admin only).
- **GET /movie/category/:category** - Get movies by category name
- **PUT /movie//rate/:id** - Edit movie rate
- **DELET /movie/:title** - delete movie by title


### User Favorites & Watch Later

- **GET /user/** -get all user data
- **GET /user/favList** - Get the user's favorite movies.
- **PUT /user/favList/id** - Add or remove a movie to/from favorites.
- **GET /user/watctLater** - Get the user's watch later list.
- **PUT /user/watctLater/:id** - Add or remove a movie to/from the watch later list.



## Environment Variables

You need to configure the following environment variables in a `.env` file for the backend API to function properly:

- **PORT**: The port the server will run on (e.g., `5000`).
- **DATABASE**: The MongoDB connection string.
- **DATABASE_PASSWORD**: Password for your MongoDB database.
- **SECRET_KEY**: Secret key used to sign and verify JWT tokens.
- **CLOUDINARY_NAME**: Your Cloudinary account name.
- **CLOUDINARY_API_KEY**: Cloudinary API key for handling image uploads.
- **CLOUDINARY_API_SECRET**: Cloudinary API secret for secure operations.
- **GOOGLE_CLIENT_ID**: Google OAuth client ID.
- **GOOGLE_CLIENT_SECRET**: Google OAuth client secret.


## Live Demo

Check out the live demo of the Movie Website here: [Live Demo Link](https://top-movies-topaz.vercel.app/home)

## Frontend Repository

The frontend of this project is built with Angular. You can find the frontend repository here: [Frontend Repository](https://github.com/mostafafinal/TopMovies.git)



