require('../models/db');
const mongoose = require('mongoose');
const Targets = require('../models/targets');

exports.postTarget = (req, res, next) => {
  const targetBody = req.body;
  Targets.create(targetBody)
    .then(result => {
      return res.status(201).json(result);
    })
    .catch(error => {
      return next({ status: 400, message: error.message });
    });
};

exports.getAllTargets = (req, res, next) => {
  Targets.find({})
    .then(results => res.status(200).json(results))
    .catch(error => next({ status: 400, message: error.message }));
};

exports.getTargetById = (req, res, next) => {
  const id = req.params.id;
  Targets.findById(id)
    .then(result => res.status(200).json(result))
    .catch(error => next({ status: 400, message: error.message }));
};

exports.updateTargetById = (req, res, next) => {
  const targetBody = req.body;
  const id = req.params.id;
  Targets.findByIdAndUpdate(id, targetBody, { new: true })
    .exec()
    .then(result => res.status(201).json(result))
    .catch(error => next({ status: 400, message: error.message }));
};

exports.deleteTargetById = (req, res, next) => {
  const id = req.params.id;

  Targets.findOneAndDelete(id)
    .then(result => res.status(200).json(result))
    .catch(error => next({ status: 400, message: error.message }));
};

exports.getAllContacts = (req, res, next) => {
  Targets.find({})

    .then(results => {
      let contacts = [];
      results.forEach((result, i) => {
        result.keyContacts.forEach(contact => {
          modifiedContact = Object.assign(
            {},
            { name: contact.name },
            { phone: contact.phone },
            { title: contact.title },
            { id: contact._id },
            {
              company: result.targetName
            }
          );

          contacts.push(modifiedContact);
        });
      });
      res.status(200).json(contacts);
    })
    .catch(error => next({ status: 400, message: error.message }));
};

exports.getAllFinancials = (req, res, next) => {
  Targets.find({})
    .then(results => {
      results = results.map(record => {
        return {
          targetName: record.targetName,
          agr: record.agr,
          beginningYearlyRevenue: record.kpiData.startYearValue,
          endingYearlyRevenue: record.kpiData.endYearValue
        };
      });
      res.status(200).json(results);
    })
    .catch(error => next({ status: 400, message: error.message }));
};
