const express = require('express');
const router = express.Router();
const User = require('../models/user-model'); 

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find(); 
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err });
    }
});

// GET user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id); // fetch user by ID
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching user', error: err });
    }
});

// PUT update user by ID
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Update user fields
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.password = req.body.password || user.password;

        const updatedUser = await user.save(); // Save updated user
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: 'Error updating user', error: err });
    }
});

// DELETE user by ID
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        await user.remove(); // Delete user
        res.status(204).send(); 
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err });
    }
});

module.exports = router;
