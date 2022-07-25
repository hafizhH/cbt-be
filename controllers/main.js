const Exams = require('../db/models/Exams')

const getDashboardData = (req, res, next) => {
  Exams.find({}, 'title subtitle description open_registration close_registration start_time duration')
  .then(exams => {
    return res.status(200).json({ data: { exams } })
  }).catch(err => {
    next(err)
  })
}

module.exports = { getDashboardData }