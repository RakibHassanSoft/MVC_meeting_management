const express = require('express');
const connectDB = require('./config/db');
const userRoute = require('./routes/usersRoute');
const bookingsRoute = require('./routes/bookingsRoute');
const app = express();
require('dotenv').config();

connectDB();

//Middleware
app.use(express.json());

//Routes
app.use('/api/users',userRoute);
app.use('/api/bookings',bookingsRoute);



//Home
app.get('/',(req,res)=>{
  res.send("Server is okay")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})