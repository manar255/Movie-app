const addMoveiToFavList = async (req, res, next) => {
    try {

        const movieId = req.params.id;
        const { userId } = req.userId;


        await movieService.addMoveiToFavList(movieId,userId);

        //return respose
        res.status(200).json({message:"the movie added to favorite list"});
        
    } catch (err) {
        console.error('Error add movie rate');
        next(err);
    }

}

module.exports = {
    
    addMoveiToFavList
}