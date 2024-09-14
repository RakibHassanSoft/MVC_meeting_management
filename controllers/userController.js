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
        sendCongratulatoryEmail(email, name);

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
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
