const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Video = require("../models/Video");

dotenv.config();
connectDB();

const seedVideos = async () => {
  try {
    await Video.deleteMany();

    const videos = [
        {
          title: "Learn React Basics",
          url: "https://www.youtube.com/embed/SqcY0GlETPk",
          tags: ["react", "frontend", "javascript"],
        },
        {
          title: "Node.js Tutorial",
          url: "https://www.youtube.com/embed/MIJt9H69QVc",
          tags: ["nodejs", "backend", "javascript"],
        },
        {
          title: "MongoDB Crash Course",
          url: "https://www.youtube.com/embed/KJK2oJ4ZJCQ",
          tags: ["mongodb", "database", "nosql"],
        },
      ];
      

    await Video.insertMany(videos); 
    console.log("Videos seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding error:", error.message);
    process.exit(1);
  }
};

seedVideos();
