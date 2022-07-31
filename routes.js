const router = require('express').Router()
const { router: authRoute } = require('./routes/auth')
const { router: profileRoute } = require('./routes/profile')
const { router: examRoute } = require('./routes/exam')
const { router: miscRoute } = require('./routes/misc')
const { authVerify } = require('./controllers/auth')

router.use('/auth', authRoute)

router.use('/profile', authVerify(), profileRoute)

router.use('/exam', examRoute)

router.use('/misc', miscRoute)

router.use((err, req, res, next) => {
    console.log(err.stack)
    return res.status(500).json({ message: err.stack })
})

module.exports = router