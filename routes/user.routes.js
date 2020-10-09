
const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controller');
const userController = controller.userController;

router.route('/user')
    .get(userController.getAllUsers);

router.route('/user/:userId')
    .get(userController.getUser);

module.exports = router;