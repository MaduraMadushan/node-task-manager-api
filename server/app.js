const express = require('express')
require('./db/mongoose')
const userRoutes = require('./routes/user')

const app = express()
app.use(express.json())
app.use('/api/users', userRoutes)

module.exports = app

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDJlZmZmYjQ5OGUxZjI2NmM1YzQzOWEiLCJpYXQiOjE1NjMzNjEyNzV9.38uRP9kJPnxGHZfb-rc1M_8IIH9tBLEMHRaN0kqEa_8
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDJlZmZmYjQ5OGUxZjI2NmM1YzQzOWEiLCJpYXQiOjE1NjMzNjE3NzJ9.nhdxoFp-kgRRIhMS1_ZJJQkH-AcIi-VRDuHUlr9aU2I
