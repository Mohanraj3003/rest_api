require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())
const student = require('./routes/stu_route')
app.use('/student', student)
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})

