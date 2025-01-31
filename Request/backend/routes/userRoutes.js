const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/create', async (req, res) => {
    const { name, email } = req.body;

    const user = new User({ name, email });

    try {
        await user.save();
        res.status(201).json({ message: 'User created!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
