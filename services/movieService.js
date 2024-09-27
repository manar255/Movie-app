const Movie = require("../models/Movie")

const createNewMovie = async (movie) => {
    try {
        const newMovie = new Movie({ ...movie });
        newMovie.save();
        return newMovie;
    } catch (error) {
        throw error;
    }
}

const findMovieById = async (id) => {
    try {
        const movie = await Movie.findById(id);
        return { ...movie._doc, rating: (movie._doc.rating.sum / movie._doc.rating.count) };
    } catch (error) {
        throw error;
    }
}

const getAllMovies = async (limit, page) => {
    try {
        const skip = (page - 1) * limit;
        return await Movie.find().limit(limit).skip(skip);
    } catch (error) {
        throw error;
    }
}
const findMovieByQuery = async (query, limit, page) => {
    try {
        const skip = (page - 1) * limit;
        const movies = await Movie.find(query).limit(limit).skip(skip).exec();
        return movies;
    } catch (error) {
        throw error;
    }
}

const updateMovieRate = async (movieId, rate,userId) => {
    try {
        const movie = await Movie.findById(movieId);
        movie.vote_count++;
        movie.vote_average=( (movie.vote_average * (movie.vote_count - 1) + rate) / movie.vote_count ).toFixed(3);
        if(movie.vote_users){
            movie.vote_users.push({userId,rating:rate}) 
        }
        else{
            movie.vote_users=[{userId,rating:rate}]
        }

        movie.save();
        return movie;
    } catch (error) {
        throw error;
    }
}

const deleteMovie = async (query) => {
    try {
        const movie = await Movie.findOneAndDelete(query);
        return movie;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createNewMovie,
    findMovieById,
    findMovieByQuery,
    updateMovieRate,
    getAllMovies,
    deleteMovie
}