const { userMock } = require('../mock');

exports.getAllUsers = () => {
    return userMock;
}

exports.getUser = (id) => {
    return userMock.find(i => i.id == id);
}