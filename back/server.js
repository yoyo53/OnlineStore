require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const db = require('./db.queries')
const firebase = require('./firebase.queries')

const app = express()
const port = process.env.PORT ?? 3000

app.use(cors({
  "origin": "*",
  "methods": "GET,PATCH,POST,DELETE,OPTIONS",
  "allowedHeaders": "X-Requested-With,Content-Type,Authorization"
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.status(200).send('API Water Warriors avec PostgreSQL, Firebase et Node.js')
})

app.get('/users', async (req, res) => {
  const result = await db.getUsers()
    res.status(200).send(result)
})
app.get('/users/:id', async (req, res) => {
  const result = await db.getUserById(req.params.id)
  res.status(200).send(result)
})
app.post('/users', async (req, res) => {
  const result = await db.createUser(req.body.name, req.body.email)
  res.status(200).send(`utilisateur inséré avec l'id ${result}`)
})
app.patch('/users/:id', async (req, res) => {
  const result = await db.updateUser(req.body.name, req.body.email, req.params.id)
  res.status(200).send(`utilisateur modifié avec l'id ${result}`)
})
app.delete('/users/:id', async (req, res) => {
  const result = await db.deleteUser(req.params.id)
  res.status(200).send(`utilisateur supprimé avec l'id ${result}`)
})
app.post('/image/:filepath', multer().single('file'), async (req, res) => {
  await firebase.uploadFile(req, req.params.filepath)
  res.status(200).send(`fichier ${req.params.filepath} ajouté au bucket`)
})
app.delete('/image/:filepath', async (req, res) => {
  await firebase.deleteFile(req.params.filepath)
  res.status(200).send(`fichier ${req.params.filepath} supprimé du bucket`)
})
app.get('/image/:filepath', async (req, res) => {
  firebase.getFile(req.params.filepath, res)
})


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
