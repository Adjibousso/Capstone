const express = require('express');
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/usercontroller');

const router = express.Router();

// Create a new user
router.post('/register', createUser);

// Get all users
router.get('/', getUsers);

// Get a single user by ID
router.get('/:id', getUserById);

// Update a user by ID
router.put('/:id', updateUser);

// Delete a user by ID
router.delete('/:id', deleteUser);

module.exports = router;
