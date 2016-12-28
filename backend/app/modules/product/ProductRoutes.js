const router = require('express').Router();
const ProductController = require('./ProductController');
const { isLoggedIn, isAdmin } = require('../../middleware');

router.route('/products')
    // Get all products
    .get(ProductController.getAll)
    // Create new product
    .post(isLoggedIn, isAdmin, ProductController.create);

router.route('/products/:productId')
    // Get product by ID
    .get(ProductController.getById)
    // Update product
    .put(isLoggedIn, isAdmin, ProductController.update)
    // Delete product
    .delete(isLoggedIn, isAdmin, ProductController.delete);

module.exports = router;