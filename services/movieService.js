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

const findMovieById = async (id)=>{
    try{
        const movie = await Movie.findById(id);
        return movie;
    } catch (error) {
        throw error;
    }
}

const findMovieByQuery = async (query)=>{
    try{
        const movies = await Movie.find(query);
        return movies;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    createNewMovie,
    findMovieById,
    findMovieByQuery
}