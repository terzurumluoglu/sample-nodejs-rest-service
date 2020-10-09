const { postService } = require('../services');
exports.getAllPost = (req, res) => {
    const users = postService.getAllPosts();
    res.status(200).send(users);
}

exports.getPost = (req, res) => {
    const { postId } = req.params;
    const post = postService.getPost(postId);
    res.status(200).send(post);
}