const { userPostService } = require('../services');

exports.getPostsByUserId = (req, res) => {
    const { userId } = req.params;
    const posts = userPostService.getPostsByUserId(userId);
    res.status(200).send(posts);
}