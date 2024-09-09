const authService = require('../services/authService')
const signUp = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phone, password, confirmPassword } = req.body;
        //create new user
        await authService.createUser({ firstName, lastName, email, phone, password });
        //TODO: generate new otp and send

        //return response
        res.status(200).json({ message: 'sign up done successful' });

    } catch (err) {

        console.error('Error sign up:');
        next(err);

    }
}
const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        //check if user exist
        const user = await authService.findUser(email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid email' });
        }

        //check if password is correct
        const isMatch = await authService.comparePassword(user, password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        //generate token
        const token = authService.generateToken({ id: user.id });

        //return response
        res.status(200).json({ token: token, message: 'sign in done successful' })



    } catch (err) {

        console.error('Error sign up:');
        next(err);

    }
}


module.exports = {
    signUp,
    signIn
};