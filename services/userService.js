const User = require("../models/User");

const addMoveiToFavList =async (movieId, userId) => {
    try {
        const user = await User.findById(userId);
        user.favMovies.push(movieId);
        user.save();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addMoveiToFavList
}