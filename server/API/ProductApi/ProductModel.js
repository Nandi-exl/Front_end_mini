const { Product } = require('../../config/setup');

class ProductModel {
  static async GetAllProduct() {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'quantity', 'price'],
    });
    return new Promise((resolve, reject) => {
      try {
        resolve(products);
      } catch (error) {
        reject(error);
      }
    });
  }

  static async GetProduct(id) {
    const product = await Product.findAll({
      where: {
        id: id,
      },
    });
    return new Promise((resolve, reject) => {
      try {
        resolve(product);
      } catch (error) {
        reject(error);
      }
    });
  }

  static async AddProduct(data) {
    const addProduct = await Product.create({
      name: data.name,
      quantity: data.quantity,
      price: data.price,
    });
    return new Promise((resolve, reject) => {
      try {
        resolve(addProduct);
      } catch (error) {
        reject(error);
      }
    });
  }

  static async UpdateProduct(data, id) {
    const updateProduct = await Product.update(
      {
        name: data.name,
        quantity: data.quantity,
        price: data.price,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return new Promise((resolve, reject) => {
      try {
        resolve(updateProduct);
      } catch (error) {
        reject(error);
      }
    });
  }

  static async DeleteProduct(id) {
    const deleteProduct = await Product.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = ProductModel;
