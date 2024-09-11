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
        return movie;
    } catch (error) {
        throw error;
    }
}

const findMovieByQuery = async (query) => {
    try {
        console.log(query)
        const movies = await Movie.find(query).exec();
        return movies;
    } catch (error) {
        throw error;
    }
}

const updateMovieRate = async(movieId, rate) => {
    try {
        const movie = await findMovieById(movieId);
        movie.rating.count++;
        movie.rating.sum += parseInt(rate);
        movie.save();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createNewMovie,
    findMovieById,
    findMovieByQuery,
    updateMovieRate
}