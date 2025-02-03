require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// File Upload Configuration
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Mongoose Schema
const ContentSchema = new mongoose.Schema({
  title: String,
  description: String,
  fileUrl: String,
  likes: { type: Number, default: 0 },
  comments: [{ type: String }],
  rating: { type: Number, default: 0 },
});
const Content = mongoose.model("Content", ContentSchema);

// Routes
app.post("/upload", upload.single("file"), async (req, res) => {
  const { title, description } = req.body;
  const fileUrl = `/uploads/${req.file.filename}`;
  
  const newContent = new Content({ title, description, fileUrl });
  await newContent.save();
  
  res.json({ message: "Upload successful", content: newContent });
});

app.get("/content", async (req, res) => {
  const contentList = await Content.find();
  res.json(contentList);
});

app.post("/like/:id", async (req, res) => {
  const content = await Content.findById(req.params.id);
  content.likes += 1;
  await content.save();
  res.json({ message: "Liked", likes: content.likes });
});

app.post("/comment/:id", async (req, res) => {
  const content = await Content.findById(req.params.id);
  content.comments.push(req.body.comment);
  await content.save();
  res.json({ message: "Comment added", comments: content.comments });
});

app.post("/rate/:id", async (req, res) => {
  const content = await Content.findById(req.params.id);
  content.rating = req.body.rating;
  await content.save();
  res.json({ message: "Rated", rating: content.rating });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
