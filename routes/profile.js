const router = require('express').Router()
const { uploadImage } = require('../controllers/imageUpload')
const { getProfile, updateProfile, getBasicProfile } = require('../controllers/profile')

//Get basic profile info (email, name, photo, etc)
//router.get('/basic', getBasicProfile)

//Get complete profile data for edit profile page
//router.get('/', getProfile)

//Update profile data from edit profile page
router.post('/update', uploadImage([{ name: 'photo', maxCount: 1 }, { name: 'paymentReceiptImg', maxCount: 1 } ]), updateProfile)

// router.post('/test', uploadImage([{ name: 'photo', maxCount: 1 }, { name: 'paymentReceiptImg', maxCount: 1 } ]), (req, res) => {
//   return res.status(200).json({ data: res.locals.uploadUrl })
// })

module.exports = { router }