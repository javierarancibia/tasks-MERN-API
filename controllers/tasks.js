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
    } catch (err) {
        res.status(500).json({ message: err})
    }
}

const getTask = (req, res) => {
    res.send('get Task')
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