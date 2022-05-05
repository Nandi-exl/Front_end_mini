import { getAllProduct } from '../../api/productApi';
import { fetchLoading, fetchAllProduct, fetchError } from './GetProductSlicer';

export const fetchAllProductAction = () => async (dispatch) => {
  dispatch(fetchLoading());
  try {
    const products = await getAllProduct();
    dispatch(fetchAllProduct(products));
  } catch (error) {
    dispatch(fetchError());
  }
};
