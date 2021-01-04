const readJsonFiles = require('../utils/readJsonFiles');
const path = require('path');

const getUsers = (req, res, next) => {
  readJsonFiles(path.join(__dirname, '..', 'data', 'users.json'))
    .then((users) => {
      req.users = users;
      next();
    })
    .catch((err) => {
      res.status(500).send(err);
    })
};

module.exports = getUsers;
