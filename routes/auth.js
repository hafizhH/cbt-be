require('dotenv').config()
const router = require('express').Router()
const passport = require('passport')
const { passportInit, authSignIn, authVerify, authLogout } = require('../controllers/auth')
const Users = require('../db/models/Users')
const Sessions = require('../db/models/Sessions')

passportInit(passport)

router.use(passport.initialize())

//Handle Sign In with Google
router.get('/google/signin', passport.authenticate('google', { scope: ['profile', 'email'] }))

//Callback, redirect to /dashboard if signin success
router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: '/google/signin' }), authSignIn)

//Session logout (without loggin out google account)
router.get('/logout', authVerify({ verifiedNotRequired: true }), authLogout)

module.exports = { router }