const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken,
    });

    await user.save();

    // Send verification email
    const verifyUrl = `${process.env.CLIENT_URL}/verify-email/${verificationToken}`;
    const message = `<p>Please verify your email by clicking <a href="${verifyUrl}">this link</a></p>`;
    await sendEmail(email, "Email Verification", "Verify your email", message);

    res.status(201).json({ message: "User registered. Please verify your email!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const verifyEmail = async (req, res) => {
  const { token } = req.params;

  try {
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token." });
    }

    // Mark user as verified
    user.isVerified = true;
    user.verificationToken = undefined; // Clear verification token
    await user.save();

    res.status(200).json({ message: "Email verified successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !user.isVerified) {
      return res.status(400).json({ message: "User not found or email not verified." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser, verifyEmail };
