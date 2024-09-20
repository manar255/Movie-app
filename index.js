const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const authRouter = require('./routers/authRouter')
const movieRouter = require('./routers/movieRouter')
const userRouter = require('./routers/userRouter')

const app = express()


require('dotenv').config();
app.use(bodyParser.json());
app.use(cors());



app.get('/', (req, res) => {
    res.send('Hello World!')
})



const PORT = process.env.PORT || 4000;
console.log(PORT)
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);


//use static file as css javascript images
// app.use('/static', express.static(path.join(__dirname, 'public')))


app.use('/auth', authRouter)
app.use('/movie', movieRouter)
app.use('/user', userRouter)


//Error handling 
app.use((error, req, res, next) => {
    console.error(error);
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
    res.status(status).json({ message });
});



mongoose.connect(DB, {}).then(() => {
    console.log('DB connection successfully!');
    //run server.
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });

}).catch(err => {
    console.error('DB connection error:', err);
});