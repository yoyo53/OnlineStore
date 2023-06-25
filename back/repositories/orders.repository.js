const { pool } = require("../utils/db.connection");

async function getOrders() {
  try {
    const query = await pool.query("SELECT * FROM orders");
    return query.rows;
  } catch {
    return null;
  }
}

async function getOrderById(id) {
  try {
    const query = await pool.query("SELECT * FROM orders WHERE id = $1", [id]);
    return query.rows[0] ?? null;
  } catch {
    return null;
  }
}

async function getOrderClient(id) {
  try {
    const query = await pool.query("SELECT client FROM orders WHERE id = $1", [
      id,
    ]);
    return query.rows[0] ?? null;
  } catch {
    return null;
  }
}

async function getOrderProduct(order_id) {
  try {
    const query = await pool.query(
      "SELECT * FROM product_list WHERE order_id = $1",
      [order_id]
    );
    return query.rows ?? null;
  } catch {
    return null;
  }
}

async function createOrder(user_id, status, total_price, product_list) {
  try {
    const query = await pool.query(
      "INSERT INTO orders (user_id, status, total_price) VALUES ($1, $2, $3) RETURNING id",
      [user_id, status, total_price]
    );

    for (const product of product_list) {
      await addOrderProduct(query.rows[0].id, product.id, product.quantity);
    }
    return query.rows[0]?.id ?? null;
  } catch {
    return null;
  }
}

async function addOrderProduct(order_id, product_id, quantity) {
  try {
    const query = await pool.query(
      "INSERT INTO product_list (order_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING id",
      [order_id, product_id, quantity]
    );
    return query.rows[0]?.id ?? null;
  } catch {
    return null;
  }
}

async function updateOrderStatus(id, status) {
  try {
    const query = await pool.query(
      "UPDATE orders SET status = $1 WHERE id = $2",
      [status, id]
    );
    return query.insertId;
  } catch {
    return null;
  }
}

async function deleteOrderProduct(order_id, product_id) {
  try {
    await pool.query(
      "DELETE FROM product_list WHERE order_id = $1 AND product_id = $2",
      [order_id, product_id]
    );
    return id;
  } catch {
    return null;
  }
}

async function deleteOrder(id) {
  try {
    await pool.query("DELETE FROM orders WHERE id = $1", [id]);
    return id;
  } catch {
    return null;
  }
}

async function getClientOrders(client_id) {
  try {
    const query = await pool.query(
      "SELECT * FROM orders WHERE client_id = $1",
      [client_id]
    );
    return query.rows ?? null;
  } catch {
    return null;
  }
}

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  addOrderProduct,
  updateOrderStatus,
  deleteOrderProduct,
  deleteOrder,
  getOrderProduct,
  getOrderClient,
  getClientOrders,
};
