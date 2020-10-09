const { postMock } = require('../mock');

exports.getAllPosts = () => {
    return postMock;
}

exports.getPost = (id) => {
    return postMock.find(i => i.id == id);
}