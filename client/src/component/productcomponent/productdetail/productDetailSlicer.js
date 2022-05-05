import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  product: [],
  error: false,
};

const productDetailSlicer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchLoading: (state) => {
      state.isLoading = true;
    },
    fecthProduct: (state, action) => {
      state.isLoading = false;
      state.product = action.payload[0];
    },
    fetchError: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

const { reducer, actions } = productDetailSlicer;
export const { fetchLoading, fecthProduct, fetchError } = actions;
export default reducer;
