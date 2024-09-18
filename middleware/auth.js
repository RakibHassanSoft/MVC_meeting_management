const jwt = require('jsonwebtoken');
const { verifyToken } = require('../utils/authUtils');

const auth = (req,res,next) =>{
    const token = req.header('Authorization')?.replace('Bearer ', '');
     /**
     ===================this is for cookies ===========
   const token = req.cookies.token; // Assuming the token is stored under the 'token' key in the cookie
     */
   

    if(!token) return res.status(401).send("Access denied");

    try {
        const decoded = verifyToken(token, process.env.SecretKey);
        req.user =decoded;
        next();
        
    } catch (error) {
        res.status(401).send("Invalid token");
    }
}

module.exports = auth;