const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controller');

router.route('/post').get(controller.postController.getAllPost);

router.route('/post/:postId').get(controller.postController.getPost);

module.exports = router;