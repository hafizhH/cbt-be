const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    googleId: {
      type: 'String',
      required: true
    },
    name: {
      type: 'String',
      required: false
    },
    email: {
      type: 'String',
      required: true
    },
    photoUrl: {
      type: 'String',
      required: false
    },
    province: {
      type: 'String',
      required: false
    },
    regency: {
      type: 'String',
      required: false
    },
    school: {
      type: 'String',
      required: false
    },
    token: {
      type: 'String',
      required: false
    },
    isAdmin: {
      type: 'Boolean',
      required: false
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

module.exports = mongoose.model('Users', UserSchema)