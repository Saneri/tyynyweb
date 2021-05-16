const express = require('express');
const router = express.Router();

const user = require('../controllers/user');

router.get('/', (req, res) => {
  res.send({ info: 'TyynyWeb backend' });
});

router.post('/user', user.create);
router.get('/user', user.getAll);
router.post('/user/login', user.login);

module.exports = router;
