const express = require('express');
const router = express.Router();
const userActions = require('../controllers/users.controller');

router.get("/", userActions.userRootAction);
router.get("/list", userActions.userListAction);
router.get("/:id", userActions.userShowAction);
router.post("/edit/:id", userActions.userEditAction);
router.get("/del/:id", userActions.userDelAction);
router.post("/create", userActions.userCreateAction);

module.exports = router;
