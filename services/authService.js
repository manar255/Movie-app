const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = async (userData) => {
    try {
        //chick if user is exist
        const oldUser = await User.findOne({ email: userData.email });
        if (oldUser) {
            throw new Error('Email is already in use');
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


module.exports = {
    createUser,
    findUser,
    comparePassword,
    generateToken
}