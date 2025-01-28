const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage });


const uploadVideo = (req, res) => {
  res.send('Video uploaded successfully!');
};


router.post('/upload', upload.single('video'), uploadVideo);

module.exports = router;
