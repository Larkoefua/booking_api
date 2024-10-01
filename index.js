import express from 'express';
import {bookingRouter } from './routes/all-routes.js';
// create an express app
const app = express();
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



app.use(bookingRouter)

// Listen for incoming requests
app.listen(3001, function () {
    console.log('App is listening on port 3001')
});

// app.listen(PORT, () => {
//     console.log('App is listening on ${PORT}')
// });