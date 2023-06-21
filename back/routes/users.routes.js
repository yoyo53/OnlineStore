const express = require('express');
const router = express.Router();
const userActions = require('../controllers/users.controller');

router.get("/list", userActions.getAllUsersAction)
router.post("/create", userActions.createUserAction);
router.post("/login", userActions.loginUserAction);
router.delete("/logout", userActions.logoutUserAction);
router.delete("/delete", userActions.deleteUserByTokenAction);
router.delete("/delete/:id", userActions.deleteUserByIdAction);

module.exports = router;
