import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  user: [],
  error: false,
};

const userDetailSlicer = createSlice({
  name: 'userById',
  initialState,
  reducers: {
    fetchIsLoading: (state) => {
      state.isLoading = true;
    },
    fetchUserDetail: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    fetchError: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

const { reducer, actions } = userDetailSlicer;

export const { fetchIsLoading, fetchUserDetail, fetchError } = actions;

export default reducer;
