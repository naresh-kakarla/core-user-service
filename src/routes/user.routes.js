const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/register', userController.register);
router.post('/login',userController.login)
router.get('/getAllUsers',userController.getAllUsers)
router.get('/:id',userController.getUserById)
// router.route('/:userId').get(userController.getUserById).put().delete



module.exports = router;
