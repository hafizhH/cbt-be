const router = require('express').Router()
const { authVerify } = require('../controllers/auth')
const { uploadImage, uploadSourceCode } = require('../controllers/upload')
const { examAccessCheck, getExamList, getExamDetails, enrollExam, startExam, getExamQuestionGroups, getExamQuestions, getCurrentAnswers, updateCurrentAnswersS, updateCurrentAnswersP, submitGroupAnswer, getGradeResults, forceSubmitGroupAnswers } = require('../controllers/exam')
const grader = require('../controllers/grader')
const scheduler = require('../controllers/scheduler')

router.get('/list/all', authVerify(), examAccessCheck({}), getExamList('all'))

router.get('/list/active', authVerify(), examAccessCheck({}), getExamList('active'))

router.get('/list/enrolled', authVerify(), examAccessCheck({}), getExamList('enrolled'))

router.get('/:examId/details', authVerify(), examAccessCheck({}), getExamDetails)

router.post('/:examId/enroll', authVerify(), examAccessCheck({ isOpenRegistration: true }), uploadImage([{ name: 'buktiImg1', maxCount: 1 }, { name: 'buktiImg2', maxCount: 1 }, { name: 'buktiImg3', maxCount: 1 }, { name: 'paymentReceiptImg', maxCount: 1 } ]), enrollExam)

router.get('/:examId/start', authVerify(), examAccessCheck({ isUserEnrolled: true, isExamStarted: true, isUserNotStarted: true }), startExam)

router.get('/:examId/question_groups/:questionGroupIndex', authVerify(), examAccessCheck({ isUserEnrolled: true, isExamStarted: true, isUserStarted: true }), getExamQuestionGroups)

router.get('/:examId/questions/:questionId', authVerify(), examAccessCheck({ isUserEnrolled: true, isExamStarted: true, isUserStarted: true }), getExamQuestions)

router.get('/:examId/current_answers/:questionId', authVerify(), examAccessCheck({ isUserEnrolled: true, isExamStarted: true, isUserStarted: true }), getCurrentAnswers)

router.post('/:examId/current_answers/:questionId/short_answer', authVerify(), examAccessCheck({ isUserEnrolled: true, isExamStarted: true, isUserStarted: true }), updateCurrentAnswersS)

router.post('/:examId/current_answers/:questionId/programming', authVerify(), examAccessCheck({ isUserEnrolled: true, isExamStarted: true, isUserStarted: true }), uploadSourceCode('sourceCode'), updateCurrentAnswersP)

router.post('/:examId/submit_group', authVerify(), examAccessCheck({ isUserEnrolled: true, isExamStarted: true, isUserStarted: true }), submitGroupAnswer)

router.get('/:examId/results', authVerify(), examAccessCheck({ isUserEnrolled: true, isExamFinished: true, isExamResultAnnounced: true }), getGradeResults)


//  **Admin only, manual API call if auto execution by scheduler fails**

router.post('/assignAllStartSchedule', authVerify({ adminRequired: true }), (req, res, next) => {
  scheduler.assignExamStartSchedule((err) => {
    if (err)
      return next(err)
    return res.status(200).json({ message: 'Exam start task assigned' })
  })
})

router.post('/:examId/assignRunningSchedule', authVerify({ adminRequired: true }), (req, res, next) => {
  const { examId } = req.params
  scheduler.assignExamRunningSchedule(examId, (err) => {
    if (err)
      return next(err)
    return res.status(200).json({ message: 'Exam force submit task & grading task assigned' })
  })
})

router.post('/:examId/force_group_submit/:questionGroupIndex', authVerify({ adminRequired: true }), (req, res, next) => {
  const { examId, questionGroupIndex } = req.params
  forceSubmitGroupAnswers(examId, questionGroupIndex, (err) => {
    if (err)
      return next(err)
    return res.status(200).json({ message: `All submission\'s group answer ${questionGroupIndex} submitted successfully` })
  })
})

router.post('/:examId/gradeAllSubmissions', authVerify({ adminRequired: true }), (req, res, next) => {
  const { examId } = req.params
  grader.gradeAllSubmissions(examId, { gradeSubmittedOnly: false }, (err) => {
    if (err)
      return next(err)
    return res.status(200).json({ message: 'Grader task finished' })
  })
})

module.exports = { router }