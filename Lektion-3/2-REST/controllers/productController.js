const router = require('express').Router();
const productModel = require('../models/products/productModel');



router.get('/', productModel.getProducts);

router.post('/', productModel.createProduct);

module.exports = router;



