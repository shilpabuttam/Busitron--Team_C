const User = require('../models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');  // ✅ Import only once
const bcrypt = require('bcryptjs');
const config = require('../config');

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.EMAIL.USER,
    pass: config.EMAIL.PASS,
  },
});

// Register User
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Generate email verification token
    const token = jwt.sign({ email }, config.JWT_SECRET, { expiresIn: '1h' });

    // Send verification email
    const mailOptions = {
      from: config.EMAIL.USER,
      to: email,
      subject: 'Verify Your Email',
      text: `Click on the link to verify your email: http://localhost:5000/api/auth/verify-email/${token}`
    };

    await transporter.sendMail(mailOptions);
    
    res.status(201).json({ message: 'User registered. Check your email for verification.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser };
