const path = require('path');
const readJsonFiles = require('../utils/readJsonFiles');

const getUsers = (req, res) => {
  readJsonFiles(path.join(__dirname, '..', 'data', 'users.json'))
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
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
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = {
  getUsers, getUser,
};
