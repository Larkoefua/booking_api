// const greetings= () =>{

//    return 'hello world'
// }

// function greetings() {
//     return 'hello world';
// }
import {booking} from "../models/booking-model.js";

export const getAllBookings = async (req, res) => {
 try {
      const allBooking = await booking.find();
   
       res.status(200).json('This is get bookings');
 } catch (error) {
    next(error);
 }
}

export const getOneBooking = (req, res) => {
    res.status(200).json('This is one booking')
}

export const postAllBookings = async (req, res) => {
    try {
        await booking.create(req.body);
    
        
        // console.log('request', req)
    
        // const bookings = await newBooking.save(req.body)
    
    
        res.status(201).json('This is a post')
    } catch (error) {
        next(error);
    }
}

export const updateAllBookings = (req, res) => {
    res.status(200).json('This is an update')
}
export const deleteAllBookings= (req, res) => {
    res.status(200).json('This is an update')
}




