var express = require('express');
var router = express.Router();

const googleTrends = require('google-trends-api');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello');
});

module.exports = router;
