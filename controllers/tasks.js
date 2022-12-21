const Task = require('../models/Task')
const asyncWrapper = require("../middlewares/asyncWrapper")


const getAllTasks = asyncWrapper(async (req, res) => { // For this th asyncWrapper middleware has the Try-Catch structure
        const tasks = await Task.find({}) // Mongoose method find({}) returns all items. Check the docs for all methods
        res.status(200).json( { data: tasks } )
        // res.status(500).json({ message: error })
})

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        await res.status(201).json(task)
    } catch (error) {
        res.status(500).json({ message: error})
    }
}

const getTask = async (req, res) => {
    try {
        // const task = await Task.findById(req.params.id) // Option that also works
        const { id } = req.params
        const task = await Task.findOne({ _id: id })
        if (!task) {
            return res.status(404).json({ message: `No task with id: ${id}` }) 
        }
        res.status(200).json(task)
        // res.status(200).send()   // This option is also valid
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
                new: true, // To return the new value
                runValidators: true // Option to run Schema validators. In this case the Name is required
            })
        if (!task) {
            return res.status(404).json({ message: `No task with id: ${id}` }) 
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
}

const deleteTask = async (req, res) => {  // Method found in Mongoose docs  https://mongoosejs.com/docs/api.html#model_Model-findOneAndDelete
    try {
        const { id } = req.params;
        const task = await Task.findOneAndDelete({ _id: id })
        if (!task) {
            return res.status(404).json({ message: `No task with id: ${id}` }) 
        }
        res.status(200).json(task)
    } catch(error) {
        res.status(500).json({ success:false, message: error })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}