const router = require('express').Router()
const { authVerify } = require('../controllers/auth')
const { getDashboardData } = require('../controllers/main')

router.get('/dashboard', authVerify({ verifiedNotRequired: true }), getDashboardData)

module.exports = { router }