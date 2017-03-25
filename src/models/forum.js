const mongoose = require('mongoose')
const User = require('./user')

// const mongoosePaginate = require('mongoose-paginate')

const userSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true, minlength: 1 },
})

const commentSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    user: { type: userSchema },
    createdAt: { type: Date, required: true, default: Date.now },
})

const forumTopicSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    user: { type: User, ref: 'User' },
    comments: [commentSchema],
})

// forumTopicsSchema.plugin(mongoosePaginate)
const Topic = mongoose.model('Topic', forumTopicSchema)
module.exports = { Topic }
