var express = require('express');
var router = express.Router();
require('../models/db');
const mongoose = require('mongoose');
const Targets = require('../models/targets');

router.post('/', (req, res, next) => {
  const targetBody = req.body;
  Targets.create(targetBody)
    .then(target => {
      return res.status(201).json(target);
    })
    .catch(error => {
      return next({ status: 400, message: error.message });
    });
});

router.get('/', (req, res, next) => {
  Targets.find()
    .then(targets => res.status(200).json({ targets }))
    .catch(error => next({ status: 400, message: error.message }));
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Targets.findById(id)
    .then(target => res.status(200).json({ target }))
    .catch(error => next({ status: 400, message: error.message }));
});

router.patch('/:id', (req, res, next) => {
  const targetBody = req.body;
  const id = req.params.id;
  Targets.findByIdAndUpdate(id, targetBody, { new: true })
    .exec()
    .then(editedTarget => res.status(201).json({ editedTarget }))
    .catch(error => next({ status: 400, message: error.message }));
});

module.exports = router;
