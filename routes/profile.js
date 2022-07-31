const router = require('express').Router()
const { uploadImage } = require('../controllers/imageUpload')
const { getProfile, updateProfile, getBasicProfile } = require('../controllers/profile')

//Get basic profile info (email, name, photo, etc)
router.get('/basic', getBasicProfile)

//Get complete profile data for edit profile page
router.get('/', getProfile)

//Update profile data from edit profile page
router.post('/', uploadImage([{ name: 'photo', maxCount: 1 }]), updateProfile)

module.exports = { router }