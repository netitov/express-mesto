const router = require('express').Router();
const controller = require('../controllers/getUsers');

router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);

module.exports = router;
