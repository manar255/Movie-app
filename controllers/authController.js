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


const googlelogin = async (req, res, next) => {
  const tokenId = req.body.token;
  try {

    //get google user data
    const userData = await authService.getGoogleUserData(tokenId);
    // Check if user exists in the database, or create a new user
    let user = await authService.findUser(userData.email);
    if (!user) {
      // Create a new user
      user = await authService.createUser({ firstName: userData.given_name, lastName: userData.family_name, email: userData.email, image: userData.picture, password: userData.email });
    }
    // Generate a token for the new user
    const token = authService.generateToken({ id: user.id });
    // Return the token
    res.status(200).json({
      token: token, message: 'sign in done successful'

    })

  } catch (error) {
    console.error('Error signing in with Google:', error);
    res.status(401).json(
      { message: 'Error signing in with Google' }
    );
  }

}
const googleRegister = async (req, res, next) => {

}

module.exports = {
  signUp,
  signIn,
  googleRegister,
  googlelogin
};