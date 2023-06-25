const express = require('express');
const router = express.Router();
const userActions = require('../controllers/users.controller');
const ordersActions = require('../controllers/orders.controller');

router.get("/profile", userActions.getUserProfileAction);
router.get("/verify", userActions.verifyToken);
router.get("/profile/:id", userActions.getUserProfileByIdAction);
router.get("/list", userActions.getAllUsersAction);
router.post("/create", userActions.createUserAction);
router.post("/login", userActions.loginUserAction);
router.get("/cart", ordersActions.getClientCartAction);
router.get("/orders", ordersActions.getClientOrdersAction);
router.get("/orders/:id", ordersActions.getClientOrdersByIdAction);
router.delete("/logout", userActions.logoutUserAction);
router.delete("/delete", userActions.deleteUserByTokenAction);
router.delete("/delete/:id", userActions.deleteUserByIdAction);

module.exports = router;
