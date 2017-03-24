const mongoose = require('mongoose')
// const mongoosePaginate = require('mongoose-paginate')

const userSchema = new mongoose.Schema({
    user: {
        _id: { type: mongoose.Schema.Types.ObjectId },
        name: { type: String, required: true, minlength: 1 },
    },
})

const commentSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    user: { type: userSchema },
    createdAt: { type: Date, required: true, default: Date.now },
})

const forumTopicsSchema = new mongoose.Schema({
    topics: [{
        topic: { type: String, required: true },
        text: { type: String, required: true },
        createdAt: { type: Date, required: true, default: Date.now },
        user: { type: userSchema },
        comments: [commentSchema],
    }],
})

// forumTopicsSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('forumTopics', forumTopicsSchema)

