var express = require('express');
var router = express.Router();
require('../models/db');
const mongoose = require('mongoose');
const Targets = require('../models/targets');

router.get('/', function(req, res, next) {
  return res.json('testing');
});

router.post('/', function(req, res) {
  return res.json('testing post');
});

module.exports = router;
