var express = require('express');
var router = express.Router();
var data = require('../src/data')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: data });
});

module.exports = router;
