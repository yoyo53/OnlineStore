const express = require('express');
const router = express.Router();
const userActions = require('../controllers/users.controller');

router.post("/create", userActions.createUserAction);
router.post("/login", userActions.loginUserAction);
router.delete("/logout", userActions.logoutUserAction);
router.delete("/delete", userActions.deleteUserAction);

module.exports = router;
