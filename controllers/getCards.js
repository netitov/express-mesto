const readJsonFiles = require('../utils/readJsonFiles');
const path = require('path');

const getCards = (req, res) => {
  readJsonFiles(path.join(__dirname, '..', 'data', 'cards.json'))
    .then((cards) => {
      req.cards = cards;
      res.send(req.cards);
    })
    .catch(() => {
      res.status(500).send({message: '...'});
    })
};

module.exports = getCards;

