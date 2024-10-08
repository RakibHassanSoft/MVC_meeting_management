const mongoose = require('mongoose')
const UserSchemaMethods = require('../utils/userSchemaMethods');

const UserSchema = new mongoose.Schema(
    {
       name: {
         type:String,
         required: true
       } ,
       email: {
        type:String,
        required: true,
        unique:true
      } ,
      password: {
        type:String,
        required: true,
      } 

    },{
        timestamps: true,
    }
)


UserSchemaMethods(UserSchema);


module.exports = mongoose.model('User',UserSchema);