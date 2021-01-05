const readJsonFiles = require('../utils/readJsonFiles');
const path = require('path');

const getUsers = (req, res) => {
  readJsonFiles(path.join(__dirname, '..', 'data', 'users.json'))
    .then((users) => {
      req.users = users;
      res.send(req.users);
    })
    .catch(() => {
      res.status(500).send({message: '...'});
    })
};

const getUser = (req, res) => {
  readJsonFiles(path.join(__dirname, '..', 'data', 'users.json'))
    .then((users) => users.find((user) => user._id === req.params.id))
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
    })
    .catch(() => {
      res.status(500).send({message: '...'});
    })
};

module.exports = {
  getUsers, getUser,
};

