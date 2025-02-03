const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

connectDB(); // Call the database connection

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
