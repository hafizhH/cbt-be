const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema(
  {
    question_number: {
      type: 'String',
      required: true
    },
    question_type: {
      type: 'String',
      enum: ['short answer', 'programming'],
      required: true
    },
    exam_data: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exams',
      required: true
    },
    question_text: {
      type: 'String',
      required: true
    },
    question_constraints: {
      type: mongoose.Schema.Types.Mixed,
      required: false
    },
    short_answer_points: {
      type: 'Number',
      required: false
    },
    short_answer_key: {
      type: 'String',
      required: false
    }, 
    code_subquestion: [{
      code_subquestion_points: {
        type: 'Number',
        required: true
      },
      code_test_case: [{
        input: {
          type: 'String',
          required: true
        },
        output: {
          type: 'String',
          required: true
        }
      }]
    }]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

module.exports = mongoose.model('Questions', QuestionSchema)