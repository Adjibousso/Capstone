const express = require('express');
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/usercontroller');

const router = express.Router();

// create a new user
router.post('/register', createUser);

// get all users
router.get('/', getUsers);

//  a  user by ID
router.get('/:id', getUserById);

// update a user by ID
router.put('/:id', updateUser);

// dlete a user by ID
router.delete('/:id', deleteUser);

module.exports = router;
