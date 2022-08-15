const config = require('../config.json')
const axios = require('axios')
const FormData = require('form-data')
const multer = require('multer')

const memoryStorage = multer.memoryStorage()

//Upload to ImgBB
const uploadImage = (fields) => {
  const store = multer({ storage: memoryStorage }).fields(fields)
  return (req, res, next) => {
    store(req, res, (err) => {
      if (err)
        next(err)
      res.locals.uploadUrl = {}
      fields.forEach(field => {
        res.locals.uploadUrl[field.name] = {}
      })
      //console.log(req.files)
      if (!req.files || Object.keys(req.files).length === 0) {
        next()
      }
      Object.keys(req.files).forEach((field, index) => {
        try {
          let formData = new FormData()
          formData.append('key', config.IMGBB_API_KEY)
          formData.append('image', Buffer.from(req.files[field][0].buffer).toString('base64'))
          axios.post('https://api.imgbb.com/1/upload', formData)
          .then(response => {
            //console.log(response.data)
            if (response.status == 200) {
              //Output to res.locals.uploadUrl
              res.locals.uploadUrl[field].originalname = req.files[field][0].originalname
              res.locals.uploadUrl[field].url = response.data.data.url
            }
            if (index == Object.keys(req.files).length - 1) {
              return next()
            }
          }).catch(err => {
            return next(err)
          })
        } catch(err) {
          return next(err)
        }
      })
    })
  }
}


const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { examId, questionId } = req.params
    cb(null, '/code_submission/exam-' + examId + '/')
  }, filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + questionId + '-' + file.originalName)
  }
})

const uploadSourceCode = (fields) => {
  const store = multer({ storage: diskStorage }).single(fields)
  return (req, res, next) => {
    store(req, res, (err) => {
      if (err)
        next(err)
      res.locals.sourceCodeFileName = ''
      //console.log(req.file)
      if (req.file) {
        res.locals.sourceCodeFileName = req.file.filename
      }
      next()
    })
  }
}

module.exports = { uploadImage, uploadSourceCode }