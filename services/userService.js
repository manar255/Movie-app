const User = require("../models/User");


const getUserData= async (id) => {
    try {
        const user = await User.findById(id ,"firstName lastName email image");
        return user;
    } catch (error) {
        throw error;
    }
}
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
        const user = await User.findById(userId).populate("favMovies",'title image overview tagline');
        return user.favMovies;
    } catch (error) {
        throw error;
    }
}
const addMoveiToWatctLaterList = async (movieId, userId) => {
    try {
        const user = await User.findById(userId);
        let msg;
        if (!user.watctLater.includes(movieId)) {
            user.watctLater.push(movieId);
            msg = "Movie added to your watch later list"
        }
        else {
            user.watctLater.pull(movieId);
            msg = "Movie removed from your watch later list"
        }
        user.save();
        return msg;
    } catch (error) {
        throw error;
    }
}

const getwatctLaterList = async (userId) => {
    try {
        const user = await User.findById(userId).populate("watctLater",'title image overview tagline');
        return user.watctLater;
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
    getUserData,
    addMoveiToWatctLaterList,
    getwatctLaterList
}