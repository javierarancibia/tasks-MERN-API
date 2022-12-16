const getAllTasks = (req, res) => {
    res.send('all items')
}

const createTask = (req, res) => {
    res.send(req.body)
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