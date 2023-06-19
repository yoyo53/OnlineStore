const { pool } = require('./db.connection')

async function getUsers() {
    const query = await pool.query('SELECT * FROM users ORDER BY id ASC')
    return query.rows
}

async function getUserById(id) {
    const query = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    return query.rows
}

async function createUser(name, email) {
    const query = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email])
    return query.insertId
}

async function updateUser(name, email, id) {
    await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id])
    return id
}

async function deleteUser(id) {
    await pool.query('DELETE FROM users WHERE id = $1', [id])
    return id
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}