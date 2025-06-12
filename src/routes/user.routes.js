const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/register', userController.register);

// router.route('/:userId').get(userController.getUserById).put().delete



module.exports = router;
