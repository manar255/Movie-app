const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    data:{
        type:Date
    },
    category: {
        type: String,
        required: true,
        enum: ['Tv show', 'Movie'],
    },
    description: {
        type: String,
        required: true
    },
    directorName: {
        type: String,
        required: true
    },
    rating: {
        type: {
            count: { type: Number, default: 0 },
            sum: { type: Number, default: 0 }
        },
        default: { count: 1, sum: 5 }
    }
}, {
    timestamps: true
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;