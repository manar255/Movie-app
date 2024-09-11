const User = require("../models/User");

const addMoveiToFavList = async (movieId, userId) => {
    try {
        const user = await User.findById(userId);
        let msg;
        if (!user.favMovies.includes(movieId)) {
            user.favMovies.push(movieId);
            msg = "Movie added to your favorite list"
        }
        else {
            user.favMovies.pull(movieId);
            msg = "Movie removed from your favorite list"
        }
        user.save();
        return msg;
    } catch (error) {
        throw error;
    }
}

const getFavList = async (userId) => {
    try {
        const user = await User.findById(userId).populate("favMovies");
        return user.favMovies;
    } catch (error) {
        throw error;
    }
}
// const removeFromFavList = async (movieId, userId) => {
//     try {
//         const user = await User.findById(userId);
//         user.favMovies.pull(movieId);
//         user.save();
//     } catch (error) {
//         throw error;
//     }

// }
module.exports = {
    addMoveiToFavList,
    getFavList,
    // removeFromFavList
}