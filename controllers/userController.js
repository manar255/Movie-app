const userService = require('../services/userService')

const addMoveiToFavList = async (req, res, next) => {
    try {

        const movieId = req.params.id;
        const { userId } = req.userId;


        await userService.addMoveiToFavList(movieId, userId);

        //return respose
        res.status(200).json({ message: "the movie added to favorite list" });

    } catch (err) {
        console.error('Error add movie rate');
        next(err);
    }

}

const getFavList = async (req, res, next) => {
    try {
        const { userId } = req.userId;
        const favList = await userService.getFavList(userId);
        res.status(200).json({ favList });
    } catch (err) {
        console.error('Error get fav list');
        next(err);
    }

}

const removeFromFavList = async (req, res, next) => {
    try {
        const movieId = req.params.id;
        const { userId } = req.userId;
        await userService.removeFromFavList(movieId, userId);
        res.status(200).json({ message: "the movie removed from favorite list" });
    } catch (err) {
        console.error('Error remove from fav list');
        next(err);
    }
}
module.exports = {

    addMoveiToFavList,
    getFavList,
    removeFromFavList
}