const express = require('express');
const router = express.Router();
const imageActions = require('../controllers/images.controller');

router.get("/:filepath", imageActions.imageGetAction);
router.post("/:filepath", imageActions.imageUploadAction);
router.delete("/:filepath", imageActions.imageDelAction);

module.exports = router;
