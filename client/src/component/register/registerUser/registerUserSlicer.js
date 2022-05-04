import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  registerUser: [],
  error: false,
};

const userSlice = createSlice({
  name: 'registerUser',
  initialState,
  reducers: {
    fetchIsLoading: (state) => {
      state.isLoading = true;
    },
    fetchRegisterUser: (state, action) => {
      state.registerUser = action.payload;
      state.isLoading = false;
    },
    fetchError: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

const { reducer, actions } = userSlice;

export const { fetchIsLoading, fetchRegisterUser, fetchError } = actions;

export default reducer;
