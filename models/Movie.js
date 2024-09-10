const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
        enum: ['Tv show', 'Movie'],
    },
    description:{
        type:String,
        required:true
    },
    directorName:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        default:0
    }
}, {
    timestamps: true
});

const Movie = mongoose.model('Move', MovieSchema);
module.exports = Movie;