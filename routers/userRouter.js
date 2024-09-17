const express = require('express')

const router = express.Router()

const userController = require('../controllers/userController');

const isAuth = require('../meddleware/isAuth')

router.get('/',isAuth,userController.getUserData)
router.get('/favList', isAuth, userController.getFavList)
router.put('/favList/:id', isAuth, userController.addMoveiToFavList)
router.get('/watctLater', isAuth, userController.getWatctLaterList)
router.put('/watctLater/:id', isAuth, userController.addMoveiToWatctLaterList)

module.exports = router;