const path = require('path');
const fs = require('fs');

exports.uploadVideo = (req, res) => {
  const videoFile = req.file;
  if (!videoFile) {
    return res.status(400).send('No video file uploaded.');
  }
  res.status(200).send({ videoPath: `/videos/${videoFile.filename}` });
};

exports.getVideos = (req, res) => {
  const videoFiles = fs.readdirSync('./uploads').map(file => ({
    name: file,
    path: `/videos/${file}`,
  }));
  res.status(200).json(videoFiles);
};
