const Player = require('../models/player');

// Get all player stats
const getPlayerStats = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

module.exports = { getPlayerStats };
