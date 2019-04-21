var express = require('express');
var router = express.Router();

var handlers = require('../handlers/targets');

router.post('/', handlers.postTarget);

router.get('/', handlers.getAllTargets);

router.get('/contacts', handlers.getAllContacts);

router.get('/financials', handlers.getAllFinancials);

router.get('/:id', handlers.getTargetById);

router.patch('/:id', handlers.updateTargetById);

router.delete('/:id', handlers.deleteTargetById);

module.exports = router;
