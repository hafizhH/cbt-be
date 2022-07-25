require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
const { insertDb } = require('./db/db')

const app = express()
const PORT = 3001

mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err)
    throw err
  console.log('Connected to MongoDB')
})

//insertDb()

app.use(cookieParser())
app.use(bodyParser.json())

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})