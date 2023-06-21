const { pool } = require('../utils/db.connection')

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

async function createUser(email, password, firstname, lastname, street_nbr, street, postcode, city, country) {
    try {
        const query = await pool.query('INSERT INTO users (email, password, firstname, lastname, street_nbr, street, postcode, city, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [email, password, firstname, lastname, street_nbr, street, postcode, city, country]);
        return query.insertId;        
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
        await pool.query('SELECT admin FROM users WHERE id = $1', [id]);
        return !!query.rows[0]?.admin;    
    }
    catch {return false}
}

module.exports = {
    getUserByEmail,
    getUserById,
    createUser,
    validateUserPassword,
    deleteUser,
    isAdminUser
}