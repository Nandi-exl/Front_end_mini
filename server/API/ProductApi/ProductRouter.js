const express = require('express');
const productRouter = express.Router();

productRouter.get('/products', (req, res) => {
  res.send('this is products Router');
});

module.exports = productRouter;