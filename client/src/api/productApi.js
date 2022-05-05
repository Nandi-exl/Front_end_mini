import axios from 'axios';
import { refreshToken } from './refreshToken';


const rootUrl = 'http://localhost:5000';
const getAllproductUrl = rootUrl + '/products';
const addProductUrl = rootUrl + '/add_product';
const updateProductUrl = rootUrl + '/update_product';
const deleteProductUrl = rootUrl + '/delete_product';
const getAllProductsAdminUrl = rootUrl + '/products_admin';

export const getAllProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const products = await axios.get(getAllproductUrl);
      resolve(products);
    } catch (error) {
      reject(error);
    }
  });
};


export const getAllProductsAdmin = () => {
  return new Promise(async( resolve, reject) => {
    try {
      const products = await axios.get(getAllProductsAdminUrl, {
        headers : {
          Authorization : `Bearer ${await refreshToken()}`
        }
      })
      resolve(products)
    } catch (error) {
      reject(error)
    }
  })
}


export const getProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await axios.get(getAllproductUrl + `/${id}`);
      resolve(product.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateProduct = (id, frmdata) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updatedProduct = await axios.patch(
        updateProductUrl + `/${id}`,
        frmdata,
        {
          headers: {
            Authorization: `Bearer ${await refreshToken()}`,
          },
        }
      );
      resolve(updatedProduct);
    } catch (error) {
      reject(error);
    }
  });
};

export const addProduct = (frmdata) => {
  return new Promise(async (resolve, reject) => {
    try {
      const addProduct = await axios.post(addProductUrl, frmdata, {
        headers: {
          Authorization: `Bearer ${await refreshToken()}`,
        },
      });
      resolve(addProduct);
    } catch (error) {
      reject(error);
    }
  });
};

export const deleteProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const deletedProduct = await axios.delete(deleteProductUrl + `/${id}`);
      resolve(deletedProduct);
    } catch (error) {
      reject(error);
    }
  });
};
