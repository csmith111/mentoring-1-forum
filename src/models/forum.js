const mongoose=require('mongoose')

mongoose.Promise = global.Promise
const Schema=mongoose.Schema

const forumSchema = new Schema({
    topic:{type:String, required:true},
    text:{type:String, required:true},
    createdAt:{type:Date, required:true},
    comments:[
        {comment:{
            text:{type:String, required:true}, 
            createdAt:{type:Date, required:true}
        }}
    ]
})

module.exports = mongoose.model('ToDoItem', forumSchema)
