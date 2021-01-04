const router = require('express').Router();
const controller = require('../controllers/getCards');
const getCardsMiddleware = require('../middlewares/getCardsMiddleware');

router.get('/', getCardsMiddleware, controller.getCards);

module.exports = router;
