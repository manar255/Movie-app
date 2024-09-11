const express = require('express')

const router = express.Router()

const movieController = require('../controllers/movieController');


router.post('/',movieController.addMovie )
router.get('/movies',movieController.getAllMovies )
router.get('/category/:category',movieController.getMoviesByCategory)
router.get('/:id',movieController.getOneMovie)
router.put('/rate/:id',movieController.addRateToMovie)


module.exports = router;