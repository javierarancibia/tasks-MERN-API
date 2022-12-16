const mongoose = require('mongoose')
// A schema and model is created for the Task entity to keep the model type well structured

const TaskSchema = new mongoose.Schema({
    name: {
        // Schema validations. Check Mongoose docs for more info
        type: String, 
        required: [true, "Name is required"], // Item required with message if 
        trim: true, // To avoid spaces in the string provided by the user
        maxlength: [ 20, "Name cannot bt longer than 20 characters" ]
    }, 
    completed:{ 
        type: Boolean, 
        default: false // Default value as it is not required
    }
})

module.exports = mongoose.model('Task', TaskSchema)