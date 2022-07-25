const mongoose = require('mongoose')

const ExamSchema = new mongoose.Schema(
  {
    title: {
      type: 'String',
      required: true
    },
    subtitle: {
      type: 'String',
      required: true
    },
    description: {
      type: 'String',
      required: true
    },
    open_registration: {
      type: 'String',
      required: true
    },
    close_registration: {
      type: 'String',
      required: true
    },
    start_time: {
      type: 'String',
      required: true
    },
    duration: {
      type: 'String',
      required: false
    },
    question_set: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
      required: false
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

module.exports = mongoose.model('Exams', ExamSchema)