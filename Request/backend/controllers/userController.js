const User = require('../models/User');

exports.createUser = async (req, res) => {
    const { name, email } = req.body;

    try {
        const user = new User({
            name,
            email,
        });

        await user.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
