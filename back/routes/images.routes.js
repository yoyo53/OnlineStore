const express = require('express');
const router = express.Router();
const imageActions = require('../controllers/images.controller');
const multer = require('multer');

router.get("/:filepath", imageActions.imageGetAction);
router.post("/:filepath", multer().single('file'), imageActions.imageUploadAction);
router.delete("/:filepath", imageActions.imageDelAction);

module.exports = router;
