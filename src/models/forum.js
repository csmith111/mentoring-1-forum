const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

mongoose.Promise = global.Promise
const Schema = mongoose.Schema({})

const commentSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    user: {
        _id: { type: mongoose.Schema.Types.id },
        name: { type: String, required: true, minlength: 1 },
    },
    createdAt: { type: Date, required: true, default: Date.now },
})

const forumTopicsSchema = new Schema({
    topics: [{
        topic: { type: String, required: true },
        text: { type: String, required: true },
        createdAt: { type: Date, required: true, default: Date.now },
        comments: [commentSchema],
    }],
})


forumTopicsSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('forumTopics', forumTopicsSchema)

