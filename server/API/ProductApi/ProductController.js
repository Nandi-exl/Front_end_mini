const ProductModel = require('./ProductModel');

class ProductController {
  static async GetAllProduct(req, res) {
    const data = await ProductModel.GetAllProduct();
    res.status(200).json(data);
  }

  static async GetProduct(req, res) {
    const id = req.params.id;
    const data = await ProductModel.GetProduct(id);
    res.status(200).json(data);
  }

  static async AddProduct(req, res) {
    const addProduct = req.body;
    const newProduct = await ProductModel.AddProduct(addProduct);
    res.status(200).json(newProduct);
  }

  static async UpdateProduct(req, res) {
    const id = req.params.id;
    const data = req.body;
    await ProductModel.UpdateProduct(data, id);
    res.status(200).json({ msg: `${id} is updated` });
  }

  static async DeleteProduct(req, res) {
    const id = req.params.id;
    const deleteProduct = await ProductModel.DeleteProduct(id);
    res.status(200).json({ msg: `${id} is deleted` });
  }
}

module.exports = ProductController;
