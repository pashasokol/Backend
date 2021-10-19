const router = require('express').Router();
const productModel = require('../models/products/productModel');



router.get('/', productModel.getProducts);
router.get('/:id', productModel.getProduct);

router.post('/', productModel.createProduct);

router.patch('/:id', productModel.updateProduct);

module.exports = router;



