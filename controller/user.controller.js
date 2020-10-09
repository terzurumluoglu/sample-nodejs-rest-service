const _mock = require('../mock');
const users = _mock.userMock;

exports.getAllUsers = (req, res) => {
    res.status(200).send(users);
}

exports.getUser = (req, res) => {
    const { userId } = req.params;
    const user = users.find(i => i.id == userId);
    res.status(200).send(user);
}