const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true

    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        // required: true,
        unique: true
    },
    image:{
        type:String
    },
    // phone: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    password: {
        type: String,
        required: true,
    },
    favMovies:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }],
    watctLater:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }]

}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);
module.exports = User;