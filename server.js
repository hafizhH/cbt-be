const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
const scheduler = require('./controllers/scheduler')
const config = require('./config.json')

const app = express()
const PORT = 3001

mongoose.connect(config.MONGO_URI, (err) => {
  if (err)
    throw err
  console.log('Connected to MongoDB')
  scheduler.scheduleDailyTask({ executeTaskFirstTime: true })
  scheduler.dailyTaskToDo()
})

app.use(cookieParser())
app.use(bodyParser.json())

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})