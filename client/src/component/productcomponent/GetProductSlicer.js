import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  products: [],
  error: false,
};

const productSlicer = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    fetchLoading: (state) => {
      state.isLoading = true;
    },
    fetchAllProduct: (state, action) => {
      state.isLoading = false;
      state.products = action.payload.data;
    },
    fetchError: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

const { reducer, actions } = productSlicer;
export const { fetchLoading, fetchAllProduct, fetchError } = actions;

export default reducer;
