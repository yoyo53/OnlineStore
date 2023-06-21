const express = require('express');
const router = express.Router();

const ordersActions = require('../controllers/orders.controller');

router.get("/", ordersActions.getOrdersAction);
router.get("/:id", ordersActions.getOrderAction);
router.get("/:id/products", ordersActions.getOrderProductAction);
router.post("/", ordersActions.createOrderAction);
router.put("/:id", ordersActions.updateOrderStatusAction);
router.put("/:id/products", ordersActions.addOrderProductAction);
router.delete("/:id", ordersActions.deleteOrderAction);
router.delete("/:id/products", ordersActions.deleteOrderProductAction);

module.exports = router;
