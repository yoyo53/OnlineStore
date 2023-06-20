const { pool } = require('../utils/db.connection')

async function addUserToken(id_user, token, expiration_date) {
    await pool.query('INSERT INTO tokens (token, id_user, expiration_date) VALUES ($1, $2, $3)', [token, id_user, expiration_date]);
    return token;
}

async function validateToken(token) {
    const query = await pool.query('SELECT * FROM tokens WHERE token = $1 AND expiration_date > NOW()', [token]);
    return query.rows[0]?.id ?? null;
}

async function deleteToken(token) {
    await pool.query('DELETE FROM tokens WHERE token = $1', [token]);
    return token;
}

async function deleteUserTokens(id_user) {
    await pool.query('DELETE FROM tokens WHERE id_user = $1', [id_user]);
    return id_user;
}

async function deleteExpiredTokens(id) {
    await pool.query('DELETE FROM tokens WHERE expiration_date < NOW()', [id]);
    return id;
}

module.exports = {
    addUserToken,
    validateToken,
    deleteToken,
    deleteUserTokens,
    deleteExpiredTokens
}