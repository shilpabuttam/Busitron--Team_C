
const GameMode = require("../models/GameMode");

exports.getGameModes = async (req, res) => {
  try {
    const { difficulty, duration, players } = req.query;
    const filters = {};

    if (difficulty) filters.difficulty = difficulty;
    if (duration) filters.duration = { $lte: parseInt(duration) };
    if (players) filters.maxPlayers = { $gte: parseInt(players) };

    const gameModes = await GameMode.find(filters);
    res.status(200).json(gameModes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createGameMode = async (req, res) => {
  try {
    const { name, description, difficulty, duration, players, rules } = req.body;

 
    if (!name || !description || !difficulty || !duration || !players || !rules) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const gameMode = new GameMode({
      name,
      description,
      difficulty,
      duration,
      maxPlayers: players,
      rules,
      custom: true, 
    });

    const savedGameMode = await gameMode.save();
    res.status(201).json(savedGameMode);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getGameModes: exports.getGameModes,
  createGameMode: exports.createGameMode,
};