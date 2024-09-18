const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/authUtils');
const { sendCongratulatoryEmail } = require('../utils/emailService'); // Import the email service

// Register
exports.register = async(req,res) =>{
   
    const {name,email,password} = req.body;
    // console.log(req.body);
    if(!email && !password){
        res.status(400).json({message:"email or password is not valid"});
    }
    try {
        const user = new User({
            name: name,
            email:email,
            password: password
        })
        await user.save();
        // console.log(user)

        // Send a congratulatory email
        // sendCongratulatoryEmail(email, name);

        res.status(201).send("User is registered");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
 
    if (!user) return res.status(404).send('User not found');

    const isMatch = await user.comparePassword(password);

    if (!isMatch) return res.status(400).send('Invalid credentials');

    const token = generateToken(user._id, process.env.SecretKey); 
    
    
    res.json({ token });

    /**
     ===================this is for cookies ===========
      // Store token in cookies
     res.cookie('token', token, {
      httpOnly: true, // Prevent JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === 'development', // Use secure cookies in production
      sameSite: 'Strict', // Prevent CSRF
      maxAge: 24 * 60 * 60 * 1000 // 1 day expiration
    });

    // Send a success message or user details (you don't need to return the token in JSON)
    res.status(200).send('Login successful');
     */
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
