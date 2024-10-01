import express from 'express';

// create an express app
const app = express();


// Define routes
app.get('/booking', function (req, res, next) {

    console.log(req.headers);
    res.json('You can book here!');

});



// app.get('/hello',  (req, res, next) => {

//     console.log(req.headers);
//     res.json('You visited the hello endpoint!');

// });

app.get('/seat', function(req, res, next){
    console.log(req.query)
    res.json('Reserve your seat')
})

// Listen for incoming requests
app.listen(3001, function () {
    console.log('App is listening on port 3001')
});