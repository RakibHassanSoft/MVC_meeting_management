const nodemailer = require('nodemailer');
require('dotenv').config();
// Create a Nodemailer transporter using SMTP settings
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // SSL/TLS
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});


// Function to send an email with HTML content
const sendCongratulatoryEmail = (to, name) => {


    const mailOptions = {
        from: process.env.EMAIL, // Sender email address
        to: to, // Receiver email address
        subject: 'Congratulations! You are now registered!',
        html: `
           <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Congratulations!</title>
                <style>
                    /* Tailwind CSS styles can be included here or use inline styles in the HTML */
                    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
                </style>
            </head>
                <body class="bg-gray-100 font-['Roboto']">
                    <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                        <h1 class="text-2xl font-bold text-green-600">Congratulations, ${name}!</h1>
                        <p class="mt-4 text-gray-700">Thank you for registering on our platform. We are excited to have you on board!</p>
                        <p class="mt-4 text-gray-700">Best regards,<br>Your Company</p>
                        <div class="mt-6 text-center text-gray-600 text-sm">
                            <p>If you have any questions, feel free to reply to this email.</p>
                        </div>
                    </div>
                </body>
           </html>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent successfully:', info.response);
        }
    });
};


module.exports = {
    sendCongratulatoryEmail
};
