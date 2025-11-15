const User = require('../models/user.model');

exports.getAllUsers = (req, res) => {
    User.getAll((err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};