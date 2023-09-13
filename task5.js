const nodemailer = require('nodemailer');

// Create a transporter using your email service's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'gmail', 'yahoo', 'outlook'
  auth: {
    user: '****@gmail.com', // your email address
    pass: '****', // your email password or an app-specific password
  },
});

// Email content
const mailOptions = {
  from: '*****@gmail.com',
  to: 'iskallop.tn@gmail.com', // recipient's email address
  subject: 'Hello from Node.js',
  text: 'test test 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 23 24 25 26 27 28 29 30',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});
