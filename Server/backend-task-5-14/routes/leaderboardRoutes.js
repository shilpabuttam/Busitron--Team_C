const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

// Get leaderboard based on filters
router.get('/', async (req, res) => {
    try {
        const { gameType, timeframe, search } = req.query;
        let query = {};

        if (gameType) query.gameType = gameType;
        if (search) query.username = new RegExp(search, 'i');

        let timeLimit = {};
        if (timeframe === 'daily') timeLimit = { date: { $gte: new Date(new Date().setDate(new Date().getDate() - 1)) } };
        else if (timeframe === 'weekly') timeLimit = { date: { $gte: new Date(new Date().setDate(new Date().getDate() - 7)) } };

        const players = await Player.find({ ...query, ...timeLimit }).sort({ score: -1 }).limit(100);
        res.json(players);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Add new player data
router.post('/', async (req, res) => {
    try {
        const { username, score, kills, gameType } = req.body;
        const newPlayer = new Player({ username, score, kills, gameType });
        await newPlayer.save();
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
