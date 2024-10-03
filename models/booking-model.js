// import{Schema, model} from "mongoose";
// const bookingSchema = new Schema({})


import mongoose, { model } from "mongoose";


const bookingSchema = new mongoose.Schema({

firstName : {
    type:String,
    // required: true
},
// type instead of string so that users would be required to fill all the neccesary details



lastName : {
    type:String,
    // required: true
},

sex : {
    type:String,
   enum: {
    values: ['male', 'female']
   },
//    required: true
},


seatNumber : {
    type:Number,
    unique: true,
    // required: true
},

email : {
    type:String,
    unique: true,
    // required: true
},

duration : {
    type:Date,
    
    // required: true
}

})

export const booking = mongoose.model('Booking', bookingSchema) /* this will read without mongoose*/