// import express from 'express'

import {Router } from "express";
import { deleteAllBookings, getAllBookings, getOneBooking, postAllBookings, updateAllBookings} from '../controllers/booking-controllers.js';

export const bookingRouter = Router();

bookingRouter.get('/bookings', getAllBookings);

bookingRouter.get('/onebooking', getOneBooking);

// bookingRouter.get('/bookings/:id', getOneBooking); this is booking with an id  

bookingRouter.post('/postbooking', postAllBookings );

bookingRouter.patch('/updatebooking/:id', updateAllBookings);

bookingRouter.delete('/deletebooking/:id', deleteAllBookings);