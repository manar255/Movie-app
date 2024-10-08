const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require('google-auth-library');

const createUser = async (userData) => {
    try {
        //chick if user is exist
        const oldUser = await User.findOne({ email: userData.email });
        if (oldUser) {
            let err = new Error('Email is already in use');
            err.status = 400;
            throw err;
        }
        //hash password
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        //create new user
        const user = new User({
            ...userData,
            password: hashedPassword
        })
        //save user
        await user.save();
        return user;

    } catch (error) {
        throw error;
    }
};

const findUser = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        throw error;
    }
}

const comparePassword = async (user, password) => {
    try {
        const isMatch = await bcrypt.compare(password, user.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

const generateToken = (data) => {
    try {
        const token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: '1h' });
        return token;
    } catch (error) {
        throw error;
    }
}

const getGoogleUserData = async (token) => {
    try {
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        return payload;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createUser,
    findUser,
    comparePassword,
    generateToken,
    getGoogleUserData
}