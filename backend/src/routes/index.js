const express = require('express');
const router = express.Router();
//const req = express.Request;
//const res = express.Response;

router.get('/test', function (req, res) {
  res.send({ test: 'test' });
});

router.use('/', (req, res) => {
  res.send({ info: 'TyynyWeb backend' });
});

module.exports = router;
