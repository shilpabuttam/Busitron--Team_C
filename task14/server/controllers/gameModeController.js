const GameMode = require('../models/gameMode');

// Get all game modes
const getGameModes = async (req, res) => {
  try {
    const gameModes = await GameMode.find();
    res.json(gameModes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

module.exports = { getGameModes };
