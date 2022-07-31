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
    question_constraint_details: {
      type: mongoose.Schema.Types.Mixed,
      required: false
    },
    question_total_points: {
      type: 'Number',
      required: true
    },
    short_answer_key : {
      type: 'String',
      required: false
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

module.exports = mongoose.model('Question', QuestionSchema)