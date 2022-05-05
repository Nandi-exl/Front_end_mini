import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading : false,
    addProduct : false,
    error : false
}

const addProductSlicer = createSlice({
    name : "addProduct",
    initialState,
    reducers: {
        fetchIsLoading : (state) => {
            state.isLoading = true
        },
        fetchAddProduct : (state) => {
            state.isLoading = false
            state.addProduct = true
        },
        fetchError : (state) => {
            state.isLoading = false
            state.error = true
        }
    }
})

const {reducer, actions} = addProductSlicer;
export const {fetchIsLoading, fetchAddProduct, fetchError} = actions
export default reducer;