const express = require('express');
const {register,login} = require('../controllers/userController');
const route = express.Router();


//Register route
route.post('/register',register);

//login route
route.post('/login',login);

module.exports= route;