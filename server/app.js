const express = require('express')
require('./db/mongoose')
require('dotenv').config()
const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/task')

const app = express()

app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/tasks', taskRoutes)

module.exports = app
