const express = require("express");
require("./Database/dbConfig"); // Ensure your database connection is correct
const socketIo = require("socket.io");
const setupSocket = require("./Database/socket"); // Assuming this contains your socket event handlers
const chatRoutes = require('./Routes/chatRoutes');
const cors = require("cors");

const app = express();

// Enable CORS for all routes
const corsOptions = {
  origin: "http://localhost:3000", // Frontend URL (React app)
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true,  // Allow cookies to be sent
};

app.use(cors(corsOptions)); // Apply CORS settings to express routes
app.use(express.json());
app.use("/", chatRoutes);

app.get("/", async (req, res) => {
  await res.send("<h1>Hello World!</h1>");
});

// HTTP server setup
const server = app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

// Socket.io setup with CORS configuration
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000", // Frontend URL (React app)
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});

// Set up the socket event listeners
setupSocket(io); // Assuming `setupSocket` handles your socket events
