const getCards = (req, res) => {
  res.send(req.cards);
};

module.exports = {
  getCards
};
