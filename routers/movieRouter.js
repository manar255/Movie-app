const express = require('express')

const router = express.Router()

const movieController = require('../controllers/movieController');


router.post('/',movieController.addMovie )
router.get('/movies',movieController.getAllMovies )
router.get('/category',movieController.getMoviesByCategory)
router.get('/:id',movieController.getOneMovie);

module.exports = router;