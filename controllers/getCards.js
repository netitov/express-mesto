const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link })
    .then(card => res.send({ card }))
    .catch(err => res.status(400).send(err))
};

const deleteCard = (req, res) => {
  const { cardId } = req.params;
  User.findById(cardId)
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Нет карточки с таким id' });
      }
      return res.send({ card })
    })
    .catch(err => res.status(400).send(err))
};

module.exports = { getCards, createCard, deleteCard };
