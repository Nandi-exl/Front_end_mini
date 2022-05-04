// import axios from 'axios';

import { userLoginApi } from '../../api/userApi';
import { loginPending, loginSuccess, loginError } from './loginSlicer';

export const userLogin = (frmdata, next) => async (dispatch) => {
  dispatch(loginPending());
  try {
    const result = await userLoginApi(frmdata);
    console.log('thie is result', result);
    if (result.error) {
      return dispatch(loginError(result.error));
    }
    dispatch(loginSuccess());
    next();
  } catch (error) {
    dispatch(loginError(error.message));
  }
};
