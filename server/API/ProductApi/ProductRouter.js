const express = require('express');
const productRouter = express.Router();
const CheckToken = require('../../Auth/Auth.js');
const ProductController = require('./ProductController');

productRouter.get('/products', ProductController.GetAllProduct);
productRouter.get(
  '/products_admin',
  CheckToken.authenticate,
  ProductController.GetAllProduct
);
productRouter.get('/products/:id', ProductController.GetProduct);
productRouter.post(
  '/add_product',
  CheckToken.authenticate,
  ProductController.AddProduct
);
productRouter.patch(
  '/update_product/:id',
  CheckToken.authenticate,
  ProductController.UpdateProduct
);
productRouter.delete('/delete_product/:id', ProductController.DeleteProduct);

module.exports = productRouter;
