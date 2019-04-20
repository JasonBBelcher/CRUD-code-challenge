const mongoose = require('mongoose');

const targetSchema = new mongoose.Schema({
  targetName: {
    type: String
  },
  keyContacts: {
    type: [{ name: String, phone: Number, title: String }]
  },
  companyInformation: {
    type: String
  },
  kpi: {
    type: { startYearValue: Number, endYearValue: Number }
  },

  status: {
    type: String,
    default: 'RESEARCHING',
    enum: ['PENDING-APPROVAL', 'APPROVED', 'DECLINED', 'RESEARCHING']
  }
});
targetSchema.virtual('agr').get(function() {
  return (
    ((this.kpi.startYearValue - this.endYearValue) / this.kpi.startYearValue) *
    100
  );
});

const Target = mongoose.model('Target', targetSchema);
module.exports = Target;
