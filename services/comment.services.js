const { commentMock } = require('../mock');

exports.getCommentsByPostId = (postId) => {
    return commentMock.filter(i => i.postId == postId);
}