const mongoose = require('mongoose')

const SubmissionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true
    },
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exams',
      required: true
    },
    status: {
      type: 'String',
      enum: ['not started', 'in progress', 'finished-submitted', 'finished-unsubmitted'],
      required: true
    },
    started_at: {
      type: 'Date',
      required: false
    },
    submitted_at: {
      type: 'Date',
      required: false
    },
    answers_data: [{
      group_status: {
        type: 'String',
        enum: ['not started', 'in progress', 'finished-submitted', 'finished-unsubmitted'],
        required: true
      },
      group_answers: [{
        question_data: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Questions',
          required: true
        },
        marked: {
          type: 'Boolean',
          required: true
        },
        short_answer: {
          type: 'String',
          required: false
        },
        code_submission_id: {
          type: 'String',
          required: false
        },
        grade_points: {
          type: 'Number',
          required: false
        },
        grade_message: {
          type: 'String',
          required: false
        }
      }]
    }]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

module.exports = mongoose.model('Submissions', SubmissionSchema)