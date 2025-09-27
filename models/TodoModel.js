const mongoose = require('mongoose')


const TodoSchema = new mongoose.Schema({
    Todo:{
        type:String,
        require:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
})


const TodoModel = mongoose.model("TodoListModel",TodoSchema )

module.exports = TodoModel