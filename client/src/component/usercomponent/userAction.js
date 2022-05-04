import { getAllUser } from '../../api/userApi';
import {
  fetchUserLoadingReducer,
  fetchUserSuccess,
  fetchUserFail,
} from './sliceUser';

export const fetchAllUser = () => async (dispatch) => {
  dispatch(fetchUserLoadingReducer());
  try {
    //fetch data
    const result = await getAllUser();
    dispatch(fetchUserSuccess(result.data));
  } catch (error) {
    dispatch(fetchUserFail());
  }
};
