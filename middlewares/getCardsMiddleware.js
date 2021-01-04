const readJsonFiles = require('../utils/readJsonFiles');
const path = require('path');

const getCards = (req, res, next) => {
  readJsonFiles(path.join(__dirname, '..', 'data', 'cards.json'))
    .then((cards) => {
      req.cards = cards;
      next();
    })
    .catch((err) => {
      res.status(500).send(err);
    })
};

module.exports = getCards;
