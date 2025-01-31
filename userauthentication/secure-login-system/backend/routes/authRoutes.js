const express = require("express");
const { registerUser, loginUser, verifyEmail } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/verify-email/:token", verifyEmail);

module.exports = router;
