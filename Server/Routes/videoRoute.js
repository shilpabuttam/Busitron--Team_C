const express=require("express");
const videoRoute=express.Router();
const Video=require("../Models/videoSchema");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/videos"); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname); 
    },
  });
  
  const videoUpload = multer({
    storage,
    limits: { fileSize: 100 * 1024 * 1024 }, 
    fileFilter: (req, file, cb) => {
      const filetypes = /mp4|mkv|avi/;
      const extname = filetypes.test(file.mimetype);
      if (extname) {
        cb(null, true);
      } else {
        cb(new Error("Only video files are allowed!"));
      }
    },
  });   
videoRoute.post("/upload", videoUpload.single("video"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No video file provided!" });
      }
  
      const { originalname, mimetype, path, size } = req.file;
  
      const video = new Video({
        filename: originalname,
        mimetype,
        path,
        size,
      });
      await video.save();
  
      res.status(200).json({
        message: "Video uploaded successfully",
        video,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  videoRoute.get("/video", async (req, res) => {
    try {
      const videos = await Video.find();
      res.status(200).json(videos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  videoRoute.get("/video/:id", async (req, res) => {
    try {
      const video = await Video.findById(req.params.id);
      if (!video) {
        return res.status(404).json({ message: "Video not found!" });
      }
  
      res.sendFile(video.path, { root: "." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  videoRoute.delete("/video/:id", async (req, res) => {
    try {
      const video = await Video.findByIdAndDelete(req.params.id);
      if (!video) {
        return res.status(404).json({ message: "Video not found!" });
      }
      const fs = require("fs");
      fs.unlink(video.path, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
        }
      });
  
      res.status(200).json({ message: "Video deleted successfully!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = videoRoute;
  