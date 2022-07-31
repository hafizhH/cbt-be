const Regions = require('../db/models/Regions')

const getRegionList = (req, res, next) => {
  const { province } = req.query
  if (province) {
    Regions.findOne({ provinceName: province })
    .then(region => {
      return res.status(200).json({ data: region })
    }).catch(err => {
      next(err)
    })
  } else {
    Regions.find({})
    .then(regions => {
      return res.status(200).json({ data: regions })
    }).catch(err => {
      next(err)
    })
  }
}

const debuggerMid = (req, res, next) => {
  //console.log('DEBUG')
  //console.log(req)
  next()
}

module.exports = { getRegionList, debuggerMid }