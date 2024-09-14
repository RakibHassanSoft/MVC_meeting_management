// userSchemaMethods.js
const bcrypt = require('bcryptjs');

const UserSchemaMethods = (schema) => {
  // Pre-save middleware
  schema.pre('save', async function (next) {

    if (!this.isModified('password')) 
         return next();
        
    const salt = await bcrypt.genSalt(10); // Fixed typo: bcrypt.getSalt -> bcrypt.genSalt
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

  // Compare password method
  schema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
};

module.exports = UserSchemaMethods;
