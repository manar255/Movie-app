const express = require('express')

const router = express.Router()

const userController = require('../controllers/userController');

const isAuth = require('../meddleware/isAuth')

router.get('/',isAuth,userController.getUserData)
router.put('/favList/:id', isAuth, userController.addMoveiToFavList)
// router.put('/unfavList', isAuth, userController.removeFromFavList)
router.get('/favList', isAuth, userController.getFavList)

module.exports = router;