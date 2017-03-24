const model = require('../models/forum')
const express = require('express')

const router = express.Router()

async function topics(req, res) {
    const data = await model.Topic.find()
    res.render('topics', { title: 'Topics', message: 'This will display a set of topics', topics: data })
}

async function addTopic(req, res) {
    res.render('addTopic', { title: 'Add Topics', message: 'This is the form to add new topics' })
}

router.get('/topics', topics)
router.get('/addTopic', addTopic)

module.exports = router
