const Exams = require('../db/models/Exams')
const Questions = require('../db/models/Questions')
const Submissions = require('../db/models/Submissions')

const examAccessCheck = ({ isUserEnrolled = false, isOpenRegistration = false, isExamStarted = false, isUserNotStarted = false, isUserStarted = false, isUserSubmitted = false, isExamFinished = false, isUserSubmissionGraded = false, isExamResultAnnounced = false }) => {
  return (req, res, next) => {
    const { examId } = req.params
    const user = res.locals.session.user

    Exams.findById(examId)
    .then(async (exam) => {
      try {
        res.locals.examData = exam
        let submission = await Submissions.findOne({ user: user._id, exam: res.locals.examData._id })
        res.locals.submissionData = submission

        if (isUserEnrolled) { //Check if user enrolled and verified
          const userInContestant = res.locals.examData.contestants.find((contestant) => contestant.user.toString() === user._id.toString())
          if (!userInContestant || !userInContestant.verified) {
            return res.status(403).json({ message: 'User enrollment & verification in exam required' })
          }
        }
        if (isOpenRegistration) {
          if (res.locals.examData.open_registration > new Date() || res.locals.examData.close_registration < new Date()) {
            return res.status(403).json({ message: 'Exam is not currently opened for registration' })
          }
        }
        if (isExamStarted) {
          if (res.locals.examData.start_time > new Date() || new Date(res.locals.examData.start_time.getTime() + (res.locals.examData.duration*60*1000)) < new Date()) {
            return res.status(403).json({ message: 'Exam has not started yet' })
          }
        }
        if (isUserNotStarted) {
          if (submission)
            return res.status(403).json({ message: 'Exam already started by user' })
        }
        if (isUserStarted) {
          let submissionStatus = submission.status
          if (submissionStatus !== 'in progress')
            return res.status(403).json({ message: 'Exam has to be started by user' })
        }
        if (isUserSubmitted) {
          let submissionStatus = submission.status
          if (submissionStatus !== 'finished-submitted')
            return res.status(403).json({ message: 'Exam has to be submitted' })
        }
        if (isExamFinished) {
          if (new Date(res.locals.examData.start_time.getTime() + res.locals.examData.duration*60*1000) > new Date()) {
            return res.status(403).json({ message: 'Exam has to be finished' })
          }
        }
        if (isUserSubmissionGraded) {
          let submissionStatus = submission.status
          if (submissionStatus !== 'graded')
            return res.status(403).json({ message: 'Please wait until exam to be graded' })
        }
        if (isExamResultAnnounced) {
          if (res.locals.examData.result_announcement > new Date()) {
            return res.status(403).json({ message: 'Exam results has not been announced yet' })
          }
        }
        next()
      } catch(err) {
        return next(err)
      }
    }).catch(err => {
      return next(err)
    })
  }
}

const getExamList = (mode) => {
  return  (req, res, next) => {
    let match
    if (mode === 'all') {
      match = {}
    } else if (mode === 'active') {
      let { from, to } = req.query
      from = new Date(from)
      to = new Date(to)
      match = {
        $or: [
          { $and: [
              { open_registration: { $gte: from } },
              { $or: [{ start_time: { $gte: to } }, { start_time: { $lte: to } }] }
            ]
          },
          { $and: [
              { open_registration: { $lte: from } },
              { $or: [{ start_time: { $gte: to } }, { start_time: { $lte: to } }] }
            ]
          }
        ]
      }
    } else if (mode === 'enrolled') {
      match = {
        contestants: { $elemMatch: { user: res.locals.session.user._id } }
      }
    } else {
      next(new Error('Unexpected list handler argument mode value'))
    }
    Exams.find(match, 'title subtitle description open_registration close_registration start_time duration')
    .then(exams => {
      return res.status(200).json({ data: { exams } })
    }).catch(err => {
      next(err)
    })
  }
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

  if (questionGroupIndex !== 'all') {
    if (res.locals.examData.question_groups[parseInt(questionGroupIndex)])
      return res.status(200).json({ data: res.locals.examData.question_groups[parseInt(questionGroupIndex)] })
    else
      next(new Error('Question group index out of range'))
  } else {
    return res.status(200).json({ data: res.locals.examData.question_groups })
  }
}

const getExamQuestions = (req, res, next) => {
  const { questionId } = req.params

  Submissions.findOne({ user: res.locals.session.user._id, exam: res.locals.examData._id, status: 'in progress' }, 'exam answers_data')
  .populate({ path: 'exam', populate: { path: 'question_groups.group_question_set', select: 'question_number question_type exam_data question_text question_constraints' } })
  .then(submission => {
    if (!submission)
      next(new Error('Exam question inaccessible due to exam not running'))
    let question_group_index = submission.answers_data.findIndex(answer_data => answer_data.group_status === 'in progress')
    let question_group = submission.exam.question_groups[question_group_index]
    if (questionId !== 'all') {
      let question_data = question_group.group_question_set.find(question => question._id.toString() === questionId)
      if (!question_data)
        next(new Error('Question data not found or not available in the current active question group'))
      return res.status(200).json({ data: question_data })
    } else {
      return res.status(200).json({ data: question_group })
    }
  }).catch(err => {
    next(err)
  })
}

const getCurrentAnswers = (req, res, next) => {
  const { questionId } = req.params

  Submissions.findOne({ user: res.locals.session.user._id, exam: res.locals.examData._id, status: 'in progress' }, 'answers_data')
  .populate('answers_data.group_answers.question_data')
  .then(submission => {
    let answer = submission.answers_data.find(answer_data => answer_data.group_status === 'in progress').group_answers
    if (questionId !== 'all') {
      if (answer.length === 0)
        return res.status(200).json({ message: 'Question not answered yet' })
      answer = answer.find(answer => answer.question_data._id.toString() === questionId)
    }
    return res.status(200).json({ data: answer })
  }).catch(err => {
    return next(err)
  })
}

const updateCurrentAnswersS = (req, res, next) => {
  const { questionId } = req.params
  const { marked, short_answer } = req.body

  if (!questionId)
    next(new Error('Please include question ID in request url parameter'))
  Submissions.findOne({ user: res.locals.session.user._id, exam: res.locals.examData._id, status: 'in progress' }, 'answers_data')
  .populate('answers_data.group_answers.question_data')
  .then(async (submission) => {
    group_answers_index = submission.answers_data.findIndex(answer_data => answer_data.group_status === 'in progress')
    answer_index = submission.answers_data[group_answers_index].group_answers.findIndex(answer => answer.question_data._id.toString() === questionId)
    if (answer_index === -1) {
      submission.answers_data[group_answers_index].group_answers.push({ question_data: questionId, marked: marked, short_answer: short_answer })
    } else {
      if (typeof(marked) !== 'undefined')
        submission.answers_data[group_answers_index].group_answers[answer_index].marked = marked
      if (typeof(short_answer) !== 'undefined')
      submission.answers_data[group_answers_index].group_answers[answer_index].short_answer = short_answer
    }
    await submission.save()
    return res.status(200).json({ message: 'Update success' })
    /*Submissions.findOneAndUpdate({ user: res.locals.session.user._id }, { answers_data: submission.answers_data })
    .then(submission => {
      return res.status(200).json({ message: 'Update success' })
    }).catch(err => {
      next(err)
    })*/
  }).catch(err => {
    next(err)
  })
}

const updateCurrentAnswersP = (req, res, next) => {
  const { questionId } = req.params
  const { marked } = req.body
  const code_submission_filename = res.locals.sourceCodeFileName

  Submissions.findOne({ user: res.locals.session.user._id, exam: res.locals.examData._id, status: 'in progress' }, 'answers_data')
  .populate('answers_data.group_answers.question_data')
  .then(async (submission) => {
    group_answers_index = submission.answers_data.findIndex(answer_data => answer_data.group_status === 'in progress')
    answer_index = submission.answers_data[group_answers_index].group_answers.findIndex(answer => answer.question_data._id.toString() === questionId)
    if (answer_index === -1) {
      submission.answers_data[group_answers_index].group_answers.push({ question_data: questionId, marked: marked, code_submission_filename: code_submission_filename })
    } else {
      if (typeof(marked) !== 'undefined')
        submission.answers_data[group_answers_index].group_answers[answer_index].marked = marked
      if (code_submission_filename !== '')
        submission.answers_data[group_answers_index].group_answers[answer_index].code_submission_filename = code_submission_filename
    }
    await submission.save()
    return res.status(200).json({ message: 'Update success' })
    /*Submissions.findOneAndUpdate({ user: res.locals.session.user._id }, { answers_data: submission.answers_data })
    .then(submission => {
      return res.status(200).json({ message: 'Update success' })
    }).catch(err => {
      next(err)
    })*/
  }).catch(err => {
    next(err)
  })
}

const submitGroupAnswer = (req, res, next) => {
  Submissions.findOne({ user: res.locals.session.user._id, exam: res.locals.examData._id, status: 'in progress' }, 'answers_data')
  .then(async (submission) => {
    answers_data_index = submission.answers_data.findIndex(answer_data => answer_data.group_status === 'in progress')
    if (new Date(res.locals.examData.start_time.getTime() + res.locals.examData.question_groups[answers_data_index].group_submit_min_time*60*1000) > new Date())
      return res.status(403).json({ message: 'Answer group cannot be submitted before minimum time' })
    submission.answers_data[answers_data_index].group_status = 'finished-submitted'
    if (answers_data_index === submission.answers_data.length - 1) {
      await submission.save()
      /*Submissions.findByIdAndUpdate(submission._id, { status: 'finished-submitted', submitted_at: new Date(), answers_data: submission.answers_data })
      .then(submission2 => {
        return res.status(200).json({ message: `Last answer group (${answers_data_index}) submitted successfully, exam submitted` })
      }).catch(err => {
        next(err)
      })*/
    } else {
      submission.answers_data[answers_data_index + 1].group_status = 'in progress'
      await submission.save()
      return res.status(200).json({ message: `Answer group ${answers_data_index} submitted successfully, started group ${answers_data_index+1}` })
      /*Submissions.findByIdAndUpdate(submission._id, { answers_data: submission.answers_data })
      .then(submission2 => {
        return res.status(200).json({ message: `Answer group ${answers_data_index} submitted successfully, started group ${answers_data_index+1}` })
      }).catch(err => {
        next(err)
      })*/
    }
  }).catch(err => {
    next(err)
  })
}

const getGradeResults = (req, res, next) => {
  Submissions.find({ exam: res.locals.examData._id, status: 'graded' }, 'user final_score')
  .sort({ final_score: -1 })
  .populate({ path: 'user', select: 'name school province regency'})
  .then(submissions => {
    return res.status(200).json({ data: submissions })
  }).catch(err => {
    return next(err)
  })
}

const forceSubmitGroupAnswers = (examId, groupNo, callback) => {
  Submissions.find({ exam: examId })
  .then(submissions => {
    submissions.forEach(async (submission) => {
      console.log(submission)
      if (submission.answers_data[groupNo].group_status === 'in progress') {
        submission.answers_data[groupNo].group_status = 'finished-submitted'
        if (submission.answers_data[groupNo+1]) {
          submission.answers_data[groupNo+1].group_status = 'in progress'
        } else {
          submission.status = 'finished-submitted'
          submission.submitted_at = new Date()
        }
        await submission.save()
      }
    })
    if (callback)
      callback()
  }).catch(err => {
    console.log(err.message)
    console.log(err.stack)
    if (callback)
      callback(err)
  })
}

module.exports = { examAccessCheck, getExamList, getExamDetails, enrollExam, startExam, getExamQuestionGroups, getExamQuestions, getCurrentAnswers, updateCurrentAnswersS, updateCurrentAnswersP, submitGroupAnswer, forceSubmitGroupAnswers, getGradeResults }