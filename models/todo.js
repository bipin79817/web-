const mongoose=require('mongoose');

const todoSchema= new mongoose.Schema({
        todo: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false
        },
        category: {
		    type: String,
		    required: true,
	    },
	    date: {
		    type: String,
		    required: true,
	    },
});

const todolist= mongoose.model('todolist', todoSchema);
module.exports=todolist;