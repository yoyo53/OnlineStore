const { pool } = require('../utils/db.connection')

async function addUserToken(id_user, token, expiration_date) {
    try {
        await pool.query('INSERT INTO tokens (token, id_user, expiration_date) VALUES ($1, $2, $3)', [token, id_user, expiration_date]);
        return token;    
    }
    catch {return null}
}

async function validateToken(token) {
    try {
        const query = await pool.query('SELECT * FROM tokens WHERE token = $1 AND expiration_date > NOW()', [token]);
        return query.rows[0]?.id ?? null;    
    }
    catch {return null}
}

async function deleteToken(token) {
    try {
        await pool.query('DELETE FROM tokens WHERE token = $1', [token]);
        return token;
    }
    catch {return null}
}

async function deleteUserTokens(id_user) {
    try {
        await pool.query('DELETE FROM tokens WHERE id_user = $1', [id_user]);
        return id_user;    
    }
    catch {return null}
}

async function deleteExpiredTokens(id) {
    try {
        await pool.query('DELETE FROM tokens WHERE expiration_date < NOW()', [id]);
        return id;    
    }
    catch {return null}
}

module.exports = {
    addUserToken,
    validateToken,
    deleteToken,
    deleteUserTokens,
    deleteExpiredTokens
}