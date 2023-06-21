const express = require('express');
const router = express.Router();
const productActions = require('../controllers/products.controller');
const multer = require('multer');

router.get('/list', productActions.getAllProductsAction)
router.get("/image/:id", productActions.getImageProductAction);
router.post("/create", multer().single('file'), productActions.createProductAction);
router.delete("/:id", productActions.deleteProductAction);

module.exports = router;
