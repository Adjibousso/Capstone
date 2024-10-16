const express = require('express');
const router = express.Router();
const User = require('../models/user-model');

router.post('/', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = new User({
            username,
            email,
            password
        });

        await user.save();
        res.status(201).send("User saved successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
