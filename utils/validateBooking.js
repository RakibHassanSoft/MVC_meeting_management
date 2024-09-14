const joi = require('joi');

const validateBooking = (booking) => {
    const schema = joi.object({
        data: joi.date().required(), // This field is required
        purpose: joi.string().required(), // This field is also required
    });

    return schema.validate(booking);
};

module.exports = validateBooking;
