// backend/models/map.js
const mongoose = require('mongoose');

// Define the map schema
const mapSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
    required: true,
  },
});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;
