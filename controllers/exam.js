const Exams = require('../db/models/Exams')
const Questions = require('../db/models/Questions')
const Submissions = require('../db/models/Submissions')

const examAccessCheck = ({ isUserEnrolled = false, isOpenRegistration = false, isExamStarted = false, isUserStarted = false, isUserSubmitted = false, isExamFinished = false }) => {
  return (req, res, next) => {
    const { examId } = req.params
    const user = res.locals.session.user

    Exams.findById(examId)
    .then(async (exam) => {
      res.locals.examData = exam
      if (isUserEnrolled) {
        const userInContestant = res.locals.examData.contestants.find((contestant) => contestant.user.toString() === user._id.toString())
        if (!userInContestant || userInContestant.verified) {
          return res.status(403).json({ message: 'User enrollment in exam required' })
        }
      }
      if (isOpenRegistration) {
        if (res.locals.examData.open_registration > new Date() || res.locals.examData.close_registration < new Date()) {
          return res.status(403).json({ message: 'Exam is not currently opened for registration' })
        }
      }
      if (isExamStarted) {
        if (res.locals.examData.start_time > new Date() || new Date(res.locals.examData.start_time.getTime() + (res.locals.examData.duration*60*1000)) < new Date()) {
          return res.status(403).json({ message: 'Exam is not started' })
        }
      }
      if (isUserSubmitted) {
        let submissionStatus = await Submissions.findOne({ user: user._id, exam: res.locals.examData._id, status: 'in progress' }, 'status').status
        if (submissionStatus !== 'finished-submitted')
          return res.status(403).json({ message: 'Exam is not submitted yet' })
      }
      if (isExamFinished) {
        if (new Date(res.locals.examData.start_time.getTime() + res.locals.examData.duration*60*1000) > new Date()) {
          return res.status(403).json({ message: 'Exam is not finished yet' })
        }
      }
      next()
    }).catch(err => {
      next(err)
    })
  }
}

const getExamList = (req, res, next) => {
  let { from, to } = req.query
  from = new Date(from)
  to = new Date(to)
  Exams.find({
    $or: [
      { $and: [
          { open_registration: { $gte: from } },
          { $or: [{ close_registration: { $gte: to } }, { close_registration: { $lte: to } }] }
        ]
      },
      { $and: [
          { open_registration: { $lte: from } },
          { $or: [{ close_registration: { $gte: to } }, { close_registration: { $lte: to } }] }
        ]
      }
    ]
  }, 'title subtitle description open_registration close_registration start_time duration')
  .then(exams => {
    return res.status(200).json({ data: { exams } })
  }).catch(err => {
    next(err)
  })
}

const getExamDetails = (req, res, next) => {
  const { title, subtitle, description, open_registration, close_registration, start_time, duration } = res.locals.examData
  const exams = { title, subtitle, description, open_registration, close_registration, start_time, duration }
  return res.status(200).json({ data: { exams } })
}

const enrollExam = (req, res, next) => {
  const { packet_type } = req.body

  let newContestant = {
    user: res.locals.session.user._id,
    packet_type: packet_type,
    buktiImgUrl: [],
    verified: false
  }
  Object.keys(res.locals.uploadUrl).forEach(key => {
    if (key === 'paymentReceiptImg' && res.locals.uploadUrl['paymentReceiptImg'].url)
      newContestant.paymentReceiptImgUrl = res.locals.uploadUrl['paymentReceiptImg'].url
    else if(res.locals.uploadUrl[key].url)
      newContestant.buktiImgUrl.push(res.locals.uploadUrl[key].url)
  })
  if ((newContestant.buktiImgUrl.length === 0 && !newContestant.paymentReceiptImgUrl) || !packet_type)
    return res.status(400).json({ message: 'Please include screenshots, receipt, or another requirement to enroll this exam' })
  let newContestants = res.locals.examData.contestants
  user_index = newContestants.findIndex(contestant => contestant.user.toString() === res.locals.session.user._id.toString())
  if (user_index === -1)
    newContestants.push(newContestant)
  else if (newContestants[user_index].verified)
    return res.status(200).json({ message: 'User already enrolled & verified for exam ' + res.locals.examData._id })
  else
    newContestants[user_index] = newContestant

  Exams.findByIdAndUpdate(res.locals.examData._id, { contestants: newContestants })
  .then(exam => {
    return res.status(200).json({ message: 'User enrolled for exam ' + res.locals.examData._id + ', waiting for admin verification'})
  }).catch(err => {
    next(err)
  })
}

const startExam = (req, res, next) => {
  let answers_data = []
  res.locals.examData.question_groups.forEach(group => {
    answers_data.push({ group_status: 'not started', group_answers: [] })
  })
  answers_data[0].group_status = 'in progress'

  Submissions.create({ user: res.locals.session.user._id, exam: res.locals.examData._id, status: 'in progress', started_at: new Date(), answers_data: answers_data })
  .then(submission => {
    return res.status(200).json({ message: 'Exam started by user' })
  }).catch(err => {
    next(err)
  })
}

const getExamQuestionGroups = (req, res, next) => {
  const { questionGroupIndex } = req.params

  if (questionGroupIndex) {
    if (res.locals.examData.question_groups[questionGroupIndex])
      return res.status(200).json({ data: res.locals.examData.question_groups[questionGroupIndex] })
    else
      next(new Error('Question group index out of range'))
  } else {
    return res.status(200).json({ data: res.locals.examData.question_groups })
  }
}

const getExamQuestions = (req, res, next) => {
  const { questionId } = req.params

  Submissions.findOne({ user: res.locals.session.user._id, exam: res.locals.examData._id, status: 'in progress' }, 'exam answers_data')
  .populate('exam')
  .populate('exam.question_groups.group_question_set')
  .then(submission => {
    if (!submission)
      next(new Error('Exam question inaccessible due to exam/question group not started yet'))
    let question_group_index = submission.answers_data.findIndex(answer_data => answer_data.group_status === 'in progress')
    // Exams.findById(res.locals.examData._id)
    // .populate('question_groups.group_question_set')
    // .then(exam => {
    let exam = submission.exam
    let question_group = exam.question_groups[question_group_index]
    if (questionId) {
      let question_data = question_group.group_question_set.find(question => question.question_data === questionId)
      if (!question_data)
        next(new Error('Question data not found or not available in the current active question group'))
      return res.status(200).json({ data: question_data })
    } else {
      return res.status(200).json({ data: question_group })
    }
    // }).catch(err => {
    //   next(err)
    // })
  }).catch(err => {
    next(err)
  })
}

const getCurrentAnswers = (req, res, next) => {
  const { questionId } = req.params

  Submissions.findOne({ user: res.locals.session.user._id, exam: res.locals.examData._id, status: 'in progress' }, 'answers_data')
  .populate('answers_data.group_answers.question_data')
  .then(submission => {
    let answer = submission.answers_data.find(answer_data => answer_data.group_status === 'in progress')
    if (questionId) {
      answer = answer.find(answer => answer.question_data._id.toString() === questionId)
      if (!answer)
        next(new Error('Question not answered yet'))
    }
    return res.status(200).json({ data: answer })
  }).catch(err => {
    next(err)
  })
}

const updateCurrentAnswersS = (req, res, next) => {
  const { questionId } = req.params
  const { marked, short_answer } = req.body

  if (!questionId)
    next(new Error('Please include question ID in request url parameter'))
  Submissions.findOne({ user: res.locals.session.user._id, exam: res.locals.examData._id, status: 'in progress' }, 'answers_data')
  .populate('answers_data.group_answers.question_data')
  .then(submission => {
    group_answers_index = submission.answers_data.findIndex(answer_data => answer_data.group_status === 'in progress')
    answer_index = submission.answers_data[group_answers_index].group_answers.findIndex(answer => answer.question_data._id.toString() === questionId)
    if (answer_index === -1) {
      submission.answers_data[group_answers_index].group_answers.push({ question_data: questionId, marked: marked, short_answer: short_answer })
    } else {
      submission.answers_data[group_answers_index].group_answers[answer_index].marked = marked
      submission.answers_data[group_answers_index].group_answers[answer_index].short_answer = short_answer
    }
    Submissions.findOneAndUpdate({ user: res.locals.session.user._id }, { answers_data: submission.answers_data })
    .then(submission => {
      return res.status(200).json({ message: 'Update success' })
    }).catch(err => {
      next(err)
    })
  }).catch(err => {
    next(err)
  })
}

const updateCurrentAnswersP = (req, res, next) => {

}

const submitAnswers = (req, res, next) => {
  Submissions.findOne({ user: res.locals.session.user._id, exam: res.locals.examData._id, status: 'in progress' }, 'answers_data')
  .then(submission => {
    answers_data_index = submission.answers_data.findIndex(answer_data => answer_data.group_status === 'in progress')
    if (new Date(res.locals.examData.start_time.getTime() + submission.answers_data[answers_data_index].group_submit_min_time*60*1000) > new Date())
      return res.status(403).json({ message: 'Answer group cannot be submitted before minimum time' })
    submission.answers_data[answers_data_index].group_status = 'finished-submitted'
    if (answers_data_index === submission.answers_data.length - 1) {
      Submissions.findByIdAndUpdate(submission._id, { status: 'finished-submitted', answers_data: submission.answers_data })
      .then(submission2 => {
        return res.status(200).json({ message: `Last answer group (${answers_data_index}) submitted successfully, exam submitted` })
      }).catch(err => {
        next(err)
      })
    } else {
      submission.answers_data[answers_data_index + 1].group_status = 'in progress'
      Submissions.findByIdAndUpdate(submission._id, { answers_data: submission.answers_data })
      .then(submission2 => {
        return res.status(200).json({ message: `Answer group ${answers_data_index} submitted successfully, started group ${answers_data_index+1}` })
      }).catch(err => {
        next(err)
      })
    }
  }).catch(err => {
    next(err)
  })
}

module.exports = { examAccessCheck, getExamList, getExamDetails, enrollExam, startExam, getExamQuestionGroups, getExamQuestions, getCurrentAnswers, updateCurrentAnswersS, updateCurrentAnswersP, submitAnswers }