const { postMock } = require('../mock');

exports.getPostsByUserId = (userId) => {
    return postMock.filter(i => i.userId == userId);
}