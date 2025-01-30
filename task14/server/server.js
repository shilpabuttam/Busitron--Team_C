const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const playersRoute = require('./routes/players');
const gameModesRoute = require('./routes/gameModes');
const mapsRoute = require('./routes/maps');
const performanceReportsRoute = require('./routes/performanceReports');

dotenv.config();

// Initialize Express
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

app.get("/", (req, res)=>{
  res.send("Hello world");
})

// Routes
app.use('/api/players', playersRoute);
app.use('/api/game-modes', gameModesRoute);
app.use('/api/maps', mapsRoute);
app.use('/api/performance-reports', performanceReportsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port https://localhost:${PORT}`);
});
