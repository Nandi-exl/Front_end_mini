import {addProduct} from '../../../api/productApi'
import {fetchIsLoading, fetchAddProduct, fetchError} from './AddProductSlicer'

export const addProductAction = (frmdata) => async (dispatch) => {
    dispatch(fetchIsLoading())
    try {
        const newProduct = await addProduct(frmdata)
        dispatch(fetchAddProduct(newProduct))
    } catch (error) {
        dispatch(fetchError())
    }
}