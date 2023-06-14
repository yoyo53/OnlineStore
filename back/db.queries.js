const { pool } = require('./db.connection')

function getUsers(request, response) {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) { throw error }
        response.status(200).json(results.rows)
    })
  }
  
function getUserById(request, response) {
    pool.query('SELECT * FROM users WHERE id = $1', [request.params.id], (error, results) => {
        if (error) { throw error }
        response.status(200).json(results.rows)
    })
}

function createUser(request, response) {
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [request.body.name, request.body.email], (error, results) => {
        if (error) { throw error }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

function updateUser(request, response) {
    pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [request.body.name, request.body.email, request.params.id], (error, results) => {
        if (error) { throw error }
        response.status(200).send(`User modified with ID: ${request.params.id}`)
    })
}

function deleteUser(request, response) {
    pool.query('DELETE FROM users WHERE id = $1', [request.params.id], (error, results) => {
        if (error) { throw error }
        response.status(200).send(`User deleted with ID: ${request.params.id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}