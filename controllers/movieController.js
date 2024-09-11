const Movie = require('../models/Movie');
const movieService = require('../services/movieService')

const addMovie = async (req, res, next) => {
    try {
        const { name, image, languadge, category, description, directorName } = req.body;

        // create new movie
        const movie = await movieService.createNewMovie({
            name,
            description,
            category,
            image,
            languadge,
            directorName,
        });

        //return respose
        res.status(200).json({ message: 'new movie added successfully' });
    } catch (err) {

        console.error('Error in add new movie');
        next(err);

    }

}

const getAllMovies = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || undefined;
        const page = parseInt(req.query.page) || 1;

        

        const movies = await movieService.getAllMovies(limit,page);

        //return respose
        res.status(200).json({ movies, message: 'get all movies done' });
    } catch (err) {

        console.error('Error get all movies:');
        next(err);

    }

}
const getMoviesByCategory = async (req, res, next) => {
    try {
        const { category } = req.params;

        const movies = await movieService.findMovieByQuery({ category });

        //return respose
        res.status(200).json({ movies, message: 'get movies by category done' });
    } catch (err) {

        console.error('Error get all movies by category:');
        next(err);

    }

}

const getOneMovie = async (req, res, next) => {
    try {

        const { id } = req.params;

        const movie = await movieService.findMovieById(id);

        //return respose
        res.status(200).json({ movie, message: 'get one movie' });
    } catch (err) {

        console.error('Error get all movies:');
        next(err);

    }

}

const addRateToMovie = async (req, res, next) => {
    try {

        const { id } = req.params;
        const { rate } = req.body;

        await movieService.updateMovieRate(id,rate);

        //return respose
        res.status(200).json({ message: 'your rate added successfully' });

    } catch (err) {
        console.error('Error add movie rate');
        next(err);
    }

}


const addMoveiToFavList = async (req, res, next) => {
    try {

        const movieId = req.params.id;
        const { userId } = req.userId;


        await movieService.addMoveiToFavList(movieId,userId);

        //return respose
        res.status(200).json({message:"the movie added to favorite list"});
        
    } catch (err) {
        console.error('Error add movie rate');
        next(err);
    }

}

module.exports = {
    addMovie,
    getAllMovies,
    getOneMovie,
    getMoviesByCategory,
    addRateToMovie,
    addMoveiToFavList
}