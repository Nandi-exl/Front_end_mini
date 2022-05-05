import { getAllProductsAdmin } from '../../../api/productApi';
import {
  fetchIsLoading,
  fetchProductsAdmin,
  fetcherror,
} from './GetProductAdminSlicer';

export const getProductAdminAction = () => async (dispatch) => {
  dispatch(fetchIsLoading());
  try {
    const products = await getAllProductsAdmin();
    dispatch(fetchProductsAdmin(products));
  } catch (error) {
    dispatch(fetcherror());
  }
};
