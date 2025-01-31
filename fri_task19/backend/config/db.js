
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://naveenyadav1622:naveen6300@cluster0.3mvuw.mongodb.net/game_modes_db"); // Add database name
    console.log("Connected to db");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;