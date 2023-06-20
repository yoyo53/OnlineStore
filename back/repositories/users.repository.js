const { pool } = require('../utils/db.connection')

async function getUserByEmail(email) {
    const query = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return query.rows[0] ?? null;
}

async function getUserById(id) {
    const query = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return query.rows[0] ?? null;
}

async function createUser(email, password, firstname, lastname, street_nbr, street, postcode, city, country) {
    const query = await pool.query('INSERT INTO users (email, password, firstname, lastname, street_nbr, street, postcode, city, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [email, password, firstname, lastname, street_nbr, street, postcode, city, country]);
    return query.insertId;
}

async function validateUserPassword(email, password) {
    const query = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
    return query.rows[0]?.id ?? null;
}

async function deleteUser(id) {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    return id;
}

module.exports = {
    getUserByEmail,
    getUserById,
    createUser,
    validateUserPassword,
    deleteUser
}