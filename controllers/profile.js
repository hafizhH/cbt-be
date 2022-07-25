const Users = require("../db/models/Users")

const getBasicProfile = (req, res) => {
  const user = res.locals.session.user
  Users.findById(user._id, 'googleId name email photoUrl verified')
  .then(user => {
    if (user)
      return res.status(200).json({ message: 'User profile found!' , data: user })
    else
      return res.status(200).json({ message: 'Request user profile not found' })
  }).catch(err => {
    next(err)
  })
}

const getProfile = (req, res) => {
  const user = res.locals.session.user
  Users.findById(user._id, 'googleId name email photoUrl province regency school paymentReceiptImgUrl verified')
  .then(user => {
    if (user)
      return res.status(200).json({ message: 'User profile found!' , data: user })
    else
      return res.status(200).json({ message: 'Request user profile not found' })
  }).catch(err => {
    next(err)
  })
}

const updateProfile = (req, res) => {
  const user = res.locals.user
  let newProfile = {
    googleId: req.body.googleId,
    name: req.body.name,
    email: req.body.email,
    photoUrl: res.locals.uploadUrl['photo'].url,
    province: req.body.province,
    regency: req.body.regency,
    school: req.body.school,
    paymentReceiptImgUrl: res.locals.uploadUrl['paymentReceiptImg'].url
  }
  newProfile.keys().forEach(key => {
    if (!newProfile[key])
      delete newProfile[key]
  })
  Users.findByIdAndUpdate(user._id, newProfile)
  .then(user => {
    if (user)
      return res.status(200).json({ message: 'User profile found!' , data: user })
    else
      return res.status(200).json({ message: 'Request user profile not found' })
  }).catch(err => {
    next(err)
  })
}

module.exports = { getBasicProfile, getProfile, updateProfile }