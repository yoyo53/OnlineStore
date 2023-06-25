const { pool } = require('../utils/db.connection')

async function getAllProducts() {
    try {
        const query = await pool.query('SELECT * FROM users');
        return query.rows;    
    }
    catch {return null}
}

async function checkExistsUser(email) {
    try {
        const query = await pool.query('SELECT count(*) FROM users WHERE email = $1', [email]);
        return query.rows[0] > 0;
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

async function createUser(email, password, firstname, lastname, street_nbr, street, postcode, city, country) {
    try {
        console.log("test");
        const query = await pool.query('INSERT INTO users (email, password, firstname, lastname, street_nbr, street, postcode, city, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id', [email, password, firstname, lastname, street_nbr, street, postcode, city, country]);
        console.log(query);
        return query.rows[0]?.id ?? null;        
    }
    catch (error) {throw error}
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
    checkExistsUser,
    getUserByEmail,
    getUserById,
    createUser,
    validateUserPassword,
    deleteUser,
    isAdminUser
}