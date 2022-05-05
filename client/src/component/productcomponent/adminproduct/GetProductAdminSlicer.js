import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  productsAdmin: [],
  error: false,
};

const getProductAdminSlicer = createSlice({
  name: 'productAdmin',
  initialState,
  reducers: {
    fetchIsLoading: (state) => {
      state.isLoading = true;
    },
    fetchProductsAdmin: (state, action) => {
      state.isLoading = false;
      state.productsAdmin = action.payload.data;
    },
    fetcherror: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

const { reducer, actions } = getProductAdminSlicer;
export const { fetchIsLoading, fetchProductsAdmin, fetcherror } = actions;
export default reducer;
