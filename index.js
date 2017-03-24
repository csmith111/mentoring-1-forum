const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const pageRoutes = require('./src/routes/page-routes')
require('dotenv').config()

const app = express()
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/src/views'))

mongoose.Promise = global.Promise
// connect to our database - DB_CONNECTION_STRING defined in .env file
mongoose.connect(process.env.DB_CONNECTION_STRING)

// configure body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/pages', pageRoutes) // This where we insert the router middleware

app.set('port', process.env.PORT || 3000)

const server = app.listen(app.get('port'), () => {
    console.log(`Express server listening on port ${server.address().port}`)
})
