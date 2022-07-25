const mongoose = require('mongoose')

const RegionSchema = new mongoose.Schema(
  {
    provinceId: {
        type: 'Number',
        required: 'false'
    },
    provinceName: {
        type: 'String',
        required: 'true'
    },
    regencies: [{
        regencyId: {
            type: 'Number',
            required: 'false'
        },
        regencyName: {
            type: 'String',
            required: 'true'
        }
    }]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

module.exports = mongoose.model('Regions', RegionSchema)