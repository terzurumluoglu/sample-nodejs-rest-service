
const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controller');
const userPostController = controller.userPostController


router.route('/user/:userId/post').get(userPostController.getPostsByUserId);

module.exports = router;