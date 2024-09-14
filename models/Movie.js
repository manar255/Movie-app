const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    date:{
        type:String
    },
    // category: {
    //     type: String,
    //     // required: true,
    //     enum: ['Tv show', 'Movie'],
    // },
    overview: {
        type: String,
        required: true
    },
    // directorName: {
    //     type: String,
    //     required: true
    // },
    rating: {
        type: {
            count: { type: Number, default: 0 },
            sum: { type: Number, default: 0 }
        },
        default: { count: 1, sum: 5 }
    },
    isReleased:{
        type:Boolean
    },
    isAdult:{
        type:Boolean
    },
    original_language:{
        type:String
    },
    tagline:{
        type:String
    },
    genres:[String],
    production_companies:[String],
    production_countries:[String],
    spoken_languages:[String],
    keywords:[String],
    vote_average:Number,
    vote_count:Number,





    
}, {
    timestamps: true
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;