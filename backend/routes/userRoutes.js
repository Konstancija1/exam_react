const express = require('express');
const router = express.Router();
const UserController = require('../routes/controlers/UserController.js');
// Create a new user
router.post('/users', UserController.registerUser);
// Get all users
router.get('/users', UserController.getUsers);
module.exports = router;
