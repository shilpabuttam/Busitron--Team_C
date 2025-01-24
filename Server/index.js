const express = require('express');
const path = require('path');

const app = express();

// Serve the HLS files from the "videos" directory
app.use('/videos', express.static(path.join(__dirname, 'videos')));

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
