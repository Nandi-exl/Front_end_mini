import { getProduct } from '../../../api/productApi';
import { fetchLoading, fecthProduct, fetchError } from './productDetailSlicer';

export const productDetailActions = (id) => async (dispatch) => {
  dispatch(fetchLoading());
  try {
    const product = await getProduct(id);
    dispatch(fecthProduct(product));
  } catch (error) {
    dispatch(fetchError());
  }
};
