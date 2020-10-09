
const express = require('express');
const router = express.Router({ mergeParams: true });
const { commentController } = require('../controller');

router.route('/comment/:postId').get(commentController.getCommentsByPostId);

module.exports = router;