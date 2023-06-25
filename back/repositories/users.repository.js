const { pool } = require('../utils/db.connection')

async function getAllUsers() {
    try {
        const query = await pool.query('SELECT * FROM users');
        return query.rows;    
    }
    catch {return null}
}

async function checkExistsUser(email) {
    try {
        const query = await pool.query('SELECT count(*) FROM users WHERE email = $1', [email]);
        return query.rows[0]?.count > 0;
    }
    catch {return false}
}

async function getUserByEmail(email) {
    try {
        const query = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return query.rows[0] ?? null;
    }
    catch {return null}
}

async function getUserById(id) {
    try {
    const query = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return query.rows[0] ?? null;
    }
    catch {return null}
}

async function createUser(email, password, firstname, lastname, address) {
    try {
        const query = await pool.query('INSERT INTO users (email, password, firstname, lastname, address) VALUES ($1, $2, $3, $4, $5) RETURNING id', [email, password, firstname, lastname, address]);
        return query.rows[0]?.id ?? null;        
    }
    catch {return null}
}

async function validateUserPassword(email, password) {
    try {
        const query = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
        return query.rows[0]?.id ?? null;
    }
    catch {return null}
}

async function deleteUser(id) {
    try {
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        return id;
    }
    catch {return null}
}

async function isAdminUser(id) {
    try {
        const query = await pool.query('SELECT admin FROM users WHERE id = $1', [id]);
        return !!query.rows[0]?.admin;    
    }
    catch {return false}
}

module.exports = {
    getAllUsers,
    checkExistsUser,
    getUserByEmail,
    getUserById,
    createUser,
    validateUserPassword,
    deleteUser,
    isAdminUser
}