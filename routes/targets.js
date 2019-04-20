var express = require('express');
var router = express.Router();
require('../models/db');
const mongoose = require('mongoose');
const Targets = require('../models/targets');

router.get('/', function(req, res, next) {
  return res.json('testing');
});

router.post('/', function(req, res, next) {
  const targetBody = req.body;
  Targets.create(targetBody)
    .then(target => {
      return res.status(201).json(target);
    })
    .catch(error => {
      return next(error);
    });
});

module.exports = router;
