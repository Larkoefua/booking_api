import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import {bookingRouter } from './routes/all-routes.js';
import cors from 'cors'


await mongoose.connect (process.env.MONGO_URI)

// create an express app
const app = express();

app.use(cors())
app.use(express.json())
app.use(bookingRouter)

// const PORT = 3000

// Define routes
// app.get('/booking', function (req, res, next) {

//     console.log(req.headers);
//     res.json('You can book here!');

// });


app.get('/seat', function(req, res, next){
    console.log(req.query)
    res.json('Reserve your seat')
})





// Listen for incoming requests
app.listen(3001, function () {
    console.log('App is listening on port 3001')
});

// app.listen(PORT, () => {
//     console.log('App is listening on ${PORT}')
// });