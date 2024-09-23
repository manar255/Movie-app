const express = require('express')

const router = express.Router()

const movieController = require('../controllers/movieController');

const uploadFile = require('../meddleware/uploadFile')


router.post('/',uploadFile.single('file'),movieController.addMovie )
router.get('/movies',movieController.getAllMovies )
// router.put('/movies',movieController.editMovieGenre )
router.get('/category/:category',movieController.getMoviesByCategory)
router.get('/:id',movieController.getOneMovie)
router.put('/rate/:id',movieController.addRateToMovie)


module.exports = router;