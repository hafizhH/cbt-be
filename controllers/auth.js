require('dotenv').config()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const { v4: uuidv4 } = require('uuid')
const Users = require('../db/models/Users')
const Sessions = require('../db/models/Sessions')

const passportInit = () => {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3001/auth/google/callback'
  }, (accessToken, refreshToken, profile, cb) => {
    //console.log(profile)
    Users.findOne({ googleId: profile.id }, (err, user) => {
      if (user) {
        return cb(err, user)
      } else {
        Users.create({ googleId: profile.id, name: profile._json.name, email: profile._json.email, photoUrl: profile._json.picture }, (err, user) => {
          if (err) {
            throw err
          }
          return cb(err, user)
        })
      }
    })
  }))
}

const authSignIn = (req, res) => {
  const token = uuidv4()
  Users.findOne({ googleId: req.user.googleId })
  .then(user => {
    if (user) {
      Sessions.findOneAndUpdate({ user: user._id }, { token: token, user: user._id, sessionData: {} }, { new: true, upsert: true })
      .then(session => {
        res.cookie('token', token, { maxAge: 10*60*60*1000, httpOnly: true })
        return res.redirect('/dashboard')
      }).catch(err => {
        return res.status(500).json({ message: err })
      })
    } else {
      return res.status(500).json({ message: 'Created user data do not exist in database' })
    }
  }).catch(err => {
    return res.status(500).json({ message: err })
  })
}

const authVerify = ({ verifiedNotRequired = false }) => {
  return (req, res, next) => {
    const token = req.cookies.token
    if (!token)
      return res.status(401).redirect(process.env.CLIENT_URL + '/signin')
    Sessions.findOne({ token: token })
    .populate('user')
    .then((session) => {
      if (session && (verifiedNotRequired || (!verifiedNotRequired && session.user.verified))) {
        res.locals.session = session
        next()
      } else {
        return res.status(401).redirect(process.env.CLIENT_URL + '/signin')
        //return res.status(401).json({ message: 'Unauthorized access, please login again' })
      }
    }).catch(err => {
      return res.status(500).json({ message: err.stack })
    })
  }
}

const authLogout = (req, res, next) => {
  const token = res.locals.session.token
  Sessions.findOneAndDelete({ token: token })
  .then((session) => {
    res.clearCookie('token')
    return res.status(200).redirect(process.env.CLIENT_URL + '/')
  }).catch(err => {
    next(err)
  })
}

module.exports = { passportInit, authSignIn, authVerify, authLogout }