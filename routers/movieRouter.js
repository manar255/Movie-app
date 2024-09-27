const express = require('express')

const router = express.Router()

const movieController = require('../controllers/movieController');

const uploadFile = require('../meddleware/uploadFile')
const isAuth = require('../meddleware/isAuth')
const ifLogin = require('../meddleware/ifLogin')


router.post('/', uploadFile.single('file'), movieController.addMovie)
router.get('/movies', movieController.getAllMovies)
router.delete('/:title', movieController.deleteMovie)
// router.put('/movies',movieController.editMovieGenre )
router.get('/category/:category', movieController.getMoviesByCategory)
router.get('/:id',ifLogin, movieController.getOneMovie)
router.put('/rate/:id', isAuth, movieController.addRateToMovie)


module.exports = router;