const express = require('express');
const app = express();
const port = 3000; // Port to listen on
const nodemailer = require('nodemailer'); // For sending emails
const path = require('path');

// Serve static files (CSS, JS, etc.) from the 'build' directory
app.use(express.static(path.join(__dirname, '..','portfolio-web', 'build')));

// Serve the 'index.html' file for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..','portfolio-web', 'build', 'index.html'));
});


// Middleware to parse JSON data from requests
app.use(express.json());

// Define a route to handle POST requests from the contact form
app.post('/send-email', (req, res) => {
  // Get the contact form data from req.body
  const { name, email, message, subject } = req.body;

  // Create a transporter for sending emails (e.g., using SMTP)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '', //email address
      pass: '', //email password

    },
  });

  // Email content
  const mailOptions = {
    from: '',
    to: email, // Recipient's email address
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
