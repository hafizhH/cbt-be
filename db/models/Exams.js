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
      type: 'Date',
      required: true
    },
    close_registration: {
      type: 'Date',
      required: true
    },
    start_time: {
      type: 'Date',
      required: true
    },
    duration: {   //minutes
      type: 'Number',
      required: true
    },
    contestants: [{
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
      },
      packet_type: {
        type: 'String',
        required: false
      },
      paymentReceiptImgUrl: {
        type: 'String',
        required: false
      },
      buktiImgUrl: [{
        type: 'String',
        required: false
      }],
      verified: {
        type: 'Boolean',
        default: false,
        required: false
      },
    }],
    question_groups: [{
      group_name: {
        type: 'String',
        required: true
      },
      group_description: {
        type: 'String',
        required: false
      },
      group_submit_min_time: {   //Minutes
        type: 'Number',
        required: true
      },
      group_submit_max_time: {   //Minutes
        type: 'Number',
        required: true
      },
      group_question_set: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Questions',
        required: true
      }]
    }],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

module.exports = mongoose.model('Exams', ExamSchema)