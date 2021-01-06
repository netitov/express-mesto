const path = require('path');
const readJsonFiles = require('../utils/readJsonFiles');

const getCards = (req, res) => {
  readJsonFiles(path.join(__dirname, '..', 'data', 'cards.json'))
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = getCards;
