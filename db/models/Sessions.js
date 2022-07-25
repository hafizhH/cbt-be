const mongoose = require('mongoose')

const SessionSchema = new mongoose.Schema(
  {
    token: {
        type: 'String',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    createdAt: {
        type: Date,
        expires: '10h',
        default: Date.now
    },
    sessionData: {
        type: mongoose.Schema.Types.Mixed,
        required: false
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

module.exports = mongoose.model('Sessions', SessionSchema)