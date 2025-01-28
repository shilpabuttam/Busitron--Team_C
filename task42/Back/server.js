const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const videoRoutes = require('./routes/VideoRoutes'); 
const app = express();
const port = 5000;


const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });
app.use('/uploads', express.static(uploadDir)); 



app.get('/', (req, res) => {
  res.send('Server is up and running!');
});


app.use('/videos', videoRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
