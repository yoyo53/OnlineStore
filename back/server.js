require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')


const app = express()
const port = process.env.PORT ?? 3000

app.use(cors({
  "origin": "*",
  "methods": "GET,PATCH,POST,DELETE,OPTIONS",
  "allowedHeaders": "X-Requested-With,Content-Type,Authorization"
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

app.get('/', (req, res) => {
  res.status(200).send('API Water Warriors avec PostgreSQL, Firebase et Node.js')
})

app.use('/users', require('./routes/users.routes'))
app.use('/images', require('./routes/images.routes'))







