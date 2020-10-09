const { commentService } = require('../services');

exports.getCommentsByPostId = (req, res) => {
    const { postId } = req.params;
    const comments = commentService.getCommentsByPostId(postId);
    res.status(200).send(comments);
}