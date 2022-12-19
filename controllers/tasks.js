const Task = require('../models/Task')


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}) // Mongoose method find({}) returns all items. Check the docs for all methods
        res.status(200).json( { data: tasks } )
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

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
    } catch (error) {
        res.status(500).json({ success:false, message: error })
    }
}

const updateTask = (req, res) => {
    res.send('update Task')
}

const deleteTask = (req, res) => {
    res.send('delete Task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}