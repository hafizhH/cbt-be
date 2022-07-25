const router = require('express').Router()
const { getRegionList } = require('../controllers/misc')
const { authVerify } = require('../controllers/auth')

router.get('/regionList', getRegionList)

module.exports = { router }