const express = require('express');
const {createBooking,getBooking} = require('../controllers/bookingController');
const route = express.Router();
const auth = require('../middleware/auth'); // Import the auth middleware


//create booking route

route.post('/create-booking', auth, createBooking);

//get bookings route
route.post('/get-bookings',auth,getBooking);

module.exports= route;