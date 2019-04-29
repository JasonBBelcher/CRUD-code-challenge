const mongoose = require('mongoose');

var schemaOptions = {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
};

const targetSchema = new mongoose.Schema(
  {
    targetName: {
      type: String,
      required: true
    },
    keyContacts: {
      type: [{ name: String, phone: String, title: String }],
      required: true
    },
    companyInformation: {
      type: String,
      default: 'No information provided.'
    },
    kpiData: {
      type: { startYearValue: Number, endYearValue: Number },
      required: true
    },

    status: {
      type: String,
      default: 'RESEARCHING',
      enum: ['PENDING-APPROVAL', 'APPROVED', 'DECLINED', 'RESEARCHING']
    }
  },
  schemaOptions
);

targetSchema.virtual('agr').get(function() {
  return (
    (this.agr =
      ((this.kpiData.endYearValue - this.kpiData.startYearValue) /
        this.kpiData.startYearValue) *
      100).toFixed(2) + '%'
  );
});

const Target = mongoose.model('Target', targetSchema);
module.exports = Target;
