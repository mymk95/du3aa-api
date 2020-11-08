const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const apiRoutes = require('./routes/apiRoutes')
const authRoutes = require('./routes/authRoutes')
require('dotenv').config()

const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use((err, req, res, next) => {
  res.status(500).send({
    status: 500,
    name: 'Internal error',
    message: err.message
  })
})

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.DATABASE_NAME
})
const db = mongoose.connection
if (!db) {
  console.log('Error connecting db')
}

app.use('/', apiRoutes)
app.use('/auth', authRoutes)

app.use(function (req, res, next) {
  res.status(404).send({
    status: 404,
    message: 'Not found'
  })
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})

module.exports = app
