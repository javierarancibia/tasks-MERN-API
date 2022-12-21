// Tutorial Link  https://www.youtube.com/watch?v=jIsj0upCBAM

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connects') // Connection to database configured in connects.js file and imported
require('dotenv').config()  //Import content from .env file to get process.env.MONGO_URI content at start function. (npm i dotenv) to install dependency
const notFound = require("./middlewares/notFound")
const errorHandlerMiddleware = require("./middlewares/errorHandler")

//Middlewares
app.use(express.json())

//Routes
app.get("/", (req, res) => {
    res.status(200).send("Success!!")
})

app.use('/api/v1/tasks', tasks) // Connection to tasks router configured in routes folder
app.use(notFound) // Middleware to set a 404 non existent page. It is imported from middleware folder. It has to go under the Connection to tasks to avoid sneding same res
app.use(errorHandlerMiddleware) //Middleware to get the Express Default Built in error handler  https://expressjs.com/en/guide/error-handling.html


const start = async () => { // Function to connect to database configured in connects.js file and setting up the server. It logs the error if something comes up. 
    try {
        await connectDB(process.env.MONGO_URI) // MONGO_URI imported from .env file
        app.listen(port, console.log(`Server is listening on Port ${port}`))
    } catch (err) {
        console.log(err)
    }
}

start() //Function that triggers connection to database and server setting


