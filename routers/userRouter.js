const express = require('express')

const router = express.Router()

const userController = require('../controllers/userController');



router.put('/favList',userController.addMoveiToFavList)

module.exports = router;