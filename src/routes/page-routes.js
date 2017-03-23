// const Topic = require('../models/forum')
const express = require('express')

const router = express.Router()


async function index(req, res) {
    res.render('index', { title: 'Hey', message: 'Hello' })
}

async function topics(req, res) {
    res.render('topics', { title: 'Topics', message: 'This will display a set of topics' })
}

async function topic(req, res) {
    res.render('topic', { title: 'Topics', message: 'This is the form to add new topics' })
}

router.get('/', index)
router.get('/topics', topics)
router.get('/topic', topic)

module.exports = router
