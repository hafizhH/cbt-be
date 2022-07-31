const router = require('express').Router()
const { authVerify } = require('../controllers/auth')
const { uploadImage } = require('../controllers/imageUpload')
const { debuggerMid } = require('../controllers/misc')
const { examAccessCheck, getExamList, getExamDetails, enrollExam, startExam, getExamQuestionGroups, getExamQuestions, getCurrentAnswers, updateCurrentAnswersS, updateCurrentAnswersP, submitAnswers } = require('../controllers/exam')

router.get('/list', authVerify(), examAccessCheck({}), getExamList)

router.get('/:examId/details', authVerify(), examAccessCheck({}), getExamDetails)

router.post('/:examId/enroll', authVerify(), examAccessCheck({ isOpenRegistration: true }), uploadImage([{ name: 'buktiImg1', maxCount: 1 }, { name: 'buktiImg2', maxCount: 1 }, { name: 'buktiImg3', maxCount: 1 }, { name: 'paymentReceiptImg', maxCount: 1 } ]), enrollExam)

router.get('/:examId/start', authVerify(), examAccessCheck({ isEnrolled: true, isExamStarted: true }), startExam)

router.get('/:examId/question_groups/:questionGroupIndex', authVerify(), examAccessCheck({ isEnrolled: true }), getExamQuestionGroups)

router.get('/:examId/questions/:questionId', authVerify(), examAccessCheck({ isEnrolled: true, isExamStarted: true, isUserStarted: true }), getExamQuestions)

router.get('/:examId/current_answers/:questionId', authVerify(), examAccessCheck({ isEnrolled: true, isExamStarted: true, isUserStarted: true }), getCurrentAnswers)

router.post('/:examId/current_answers/:questionId/short_answer', authVerify(), examAccessCheck({ isEnrolled: true, isExamStarted: true, isUserStarted: true }), updateCurrentAnswersS)

router.post('/:examId/current_answers/:questionId/programming', authVerify(), examAccessCheck({ isEnrolled: true, isExamStarted: true, isUserStarted: true }), updateCurrentAnswersP)

router.post('/:examId/submit/:groupNo', authVerify(), examAccessCheck({ isEnrolled: true, isExamStarted: true, isUserStarted: true }), submitAnswers)

module.exports = { router }