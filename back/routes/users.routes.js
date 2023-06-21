const express = require('express');
const router = express.Router();
const userActions = require('../controllers/users.controller');
const ordersActions = require('../controllers/orders.controller');

router.post("/create", userActions.createUserAction);
router.post("/login", userActions.loginUserAction);
router.get("/orders", ordersActions.getClientOrdersAction);
router.delete("/logout", userActions.logoutUserAction);
router.delete("/delete", userActions.deleteUserAction);

module.exports = router;
