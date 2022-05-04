import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    fetchUserLoadingReducer: (state) => {
      state.isLoading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    fetchUserFail: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

const { reducer, actions } = userSlice;

export const { fetchUserLoadingReducer, fetchUserSuccess, fetchUserFail } =
  actions;

export default reducer;
