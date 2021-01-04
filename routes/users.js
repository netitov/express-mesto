const router = require('express').Router();
const controller = require('../controllers/getUsers');
const getUserMiddleware = require('../middlewares/getUsersMiddleware');

router.get('/', getUserMiddleware, controller.getUsers);
router.get('/:id', getUserMiddleware, controller.getUser);

module.exports = router;
