const _mock = require('../mock');
const users = _mock.userMock;

exports.getAllUsers = (req, res) => {
    res.status(200).send(users);
}

exports.getUser = (req, res) => {
    const { userId } = req.params;
    if (!userId) {
        res.status(400).send({
            code : 400,
            message : 'missing parameters'
        });
    }
    const user = users.find(i => i.id == userId);
    if (!user) {
        res.status(400).send({
            code : 400,
            message : 'user not found'
        });
    }
    res.status(200).send(user);
}