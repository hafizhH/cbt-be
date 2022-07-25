const router = require('express').Router()
const { getRegionList } = require('../controllers/misc')
const { authVerify } = require('../controllers/auth')

router.get('/regionList', authVerify({ verifiedNotRequired: true }), getRegionList)

module.exports = { router }