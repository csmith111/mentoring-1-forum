const model = require('../models/forum')
const express = require('express')

const router = express.Router()


const dataOld = [
    {
        topic: 'JavaScript is Tricky',
        text: 'Have you had the feeling of wtf...wtf when using JavaScript',
        createdAt: '1/1/2012',
        user: { _id: 1, name: 'Joe' },
    },
    {
        topic: 'JavaScript is Cool',
        text: 'JavaScript has some bad parts but the good parts are great!',
        createdAt: '1/1/2012',
        user: { _id: 2, name: 'Jim' },
    },
]

async function index(req, res) {
    res.render('index', { title: 'Hey', message: 'Hello' })
}

async function topics(req, res) {
    const data = await model.Topic.find()
    res.render('topics', { title: 'Topics', message: 'This will display a set of topics', topics: data })
}

async function topic(req, res) {
    res.render('topic', { title: 'Topics', message: 'This is the form to add new topics' })
}

async function addTopic(req, res) {
    res.render('addTopic', { title: 'Add Topics', message: 'This is the form to add new topics' })
}

router.get('/', index)
router.get('/topics', topics)
router.get('/topic', topic)
router.get('/addTopic', addTopic)

module.exports = router
