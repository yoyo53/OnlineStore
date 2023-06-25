const { pool } = require('../utils/db.connection')

async function getAllProducts() {
    try {
        const query = await pool.query('SELECT * FROM products');
        return query.rows;    
    }
    catch {return null}
}

async function getProductById(id) {
    try {
        const query = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        return query.rows[0] ?? null;    
    }
    catch {return null}
}

async function createProduct(name, description, stock, price, image) {
    try {
        const query = await pool.query('INSERT INTO products (name, description, stock, price, image) VALUES ($1, $2, $3, $4, $5) RETURNING id', [name, description, stock, price, image]);
        return query.rows[0]?.id ?? null;    
    }
    catch {return null}
}

async function updateProduct(id, name, description, stock, price, image) {
    try {
        const query = await pool.query('UPDATE products SET (name, description, stock, price, image) = ($1, $2, $3, $4, $5) WHERE id = $6', [name, description, stock, price, image, id]);
        return id;    
    }
    catch {return null}
}

async function deleteProduct(id) {
    try {
        await pool.query('DELETE FROM products WHERE id = $1', [id]);
        return id;    
    }
    catch {return null}
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}