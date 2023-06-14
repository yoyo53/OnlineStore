require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const db = require('./db.queries')
const firebase = require('./firebase.queries')

const app = express()
const port = process.env.PORT ?? 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.get('/image/:filepath', firebase.getFile)
app.post('/image', multer().single('file'), firebase.uploadFile)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
