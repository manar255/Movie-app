const express = require('express')

const router = express.Router()

const userController = require('../controllers/userController');



router.put('/favList',userController.addMoveiToFavList)
router.put('/unfavList',userController.removeFromFavList)
router.get('/favList',userController.getFavList)

module.exports = router;