const express = require('express');
const router = express.Router();
let userController = require('./controller');

// Routes
router.get('/find', userController.findUser);
router.post('/create', userController.createUser);

module.exports = router;