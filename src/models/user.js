const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true, minlength: 1 },
})

const User = mongoose.model('User', userSchema)
module.exports = { User }
