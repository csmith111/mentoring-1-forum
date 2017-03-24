const model = require('../models/forum')
const express = require('express')

const router = express.Router()

function addTopic(req, res) {
    try {
        const { topic, text, userName } = req.body
        const aUser = new model.User({ name: userName })
        const newTopic = new model.Topic({ topic, text, createdAt: Date.now(), user: aUser, comments: null })
        newTopic.save()
        res.redirect('/pages/topics')
    } catch (err) {
        console.log(err)
    }
}

router.post('/addTopic', addTopic)

module.exports = router

