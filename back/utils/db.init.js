const { pool } = require("../utils/db.connection");

async function createTables() {
    try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            email VARCHAR(50) NOT NULL,
            password VARCHAR(200) NOT NULL,
            firstname VARCHAR(50) NOT NULL,
            lastname VARCHAR(50) NOT NULL,
            address VARCHAR(50) NOT NULL,
            admin boolean DEFAULT false
        );
        CREATE TABLE IF NOT EXISTS tokens (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            id_user uuid NOT NULL,
            token uuid NOT NULL,
            expiration_date timestamp NOT NULL,
            FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE
        );
        CREATE TABLE IF NOT EXISTS products (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            name VARCHAR(50) NOT NULL,
            description VARCHAR(50),
            stock integer NOT NULL,
            price integer NOT NULL,
            image serial
        );
        CREATE TABLE IF NOT EXISTS orders (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            order_date timestamp NOT NULL DEFAULT now(),
            client uuid NOT NULL,
            status VARCHAR(50),
            total_price integer,
            FOREIGN KEY (client) REFERENCES users(id) ON DELETE CASCADE
        );
        CREATE TABLE IF NOT EXISTS product_list (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            order_id uuid NOT NULL,
            product_id uuid NOT NULL,
            quantity integer,
            FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
            FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
        );
        `);
    } 
    catch (error) {
        console.log("error : database creation failed");
        throw error;
    }
}

module.exports = {
    createTables
};
