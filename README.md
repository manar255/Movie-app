
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
   git clone https://github.com/yourusername/movie-website-backend.git
   cd movie-website-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```bash
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
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

- **POST /api/auth/signup** - Create a new user account.
- **POST /api/auth/login** - Log in with an email and password.
- **POST /api/auth/google** - Log in with Google OAuth.

### Movies

- **GET /api/movies** - Fetch all movies.
- **GET /api/movies/:id** - Get details of a specific movie.
- **POST /api/movies** - Add a new movie (Admin only).

### User Favorites & Watch Later

- **GET /api/users/favorites** - Get the user's favorite movies.
- **POST /api/users/favorites** - Add a movie to favorites.
- **GET /api/users/watch-later** - Get the user's watch later list.
- **POST /api/users/watch-later** - Add a movie to the watch later list.

### Ratings

- **POST /api/movies/:id/rate** - Submit a rating for a movie.
- **GET /api/movies/:id/ratings** - Get all ratings for a movie.

## Environment Variables

You need to configure the following environment variables in a `.env` file for the backend API to function properly:

- **PORT**: The port the server will run on.
- **MONGODB_URI**: MongoDB connection string.
- **JWT_SECRET**: Secret key used to sign and verify JWT tokens.
- **GOOGLE_CLIENT_ID**: Google OAuth client ID.
- **GOOGLE_CLIENT_SECRET**: Google OAuth client secret.




