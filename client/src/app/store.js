import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../component/usercomponent/sliceUser';
import loginReducer from '../component/login/loginSlicer';
import registerReducer from '../component/register/registerUser/registerUserSlicer';
import userDetailReducer from '../component/usercomponent/userdetail/UserDetailSlicer';


export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    register: registerReducer,
    userDetail : userDetailReducer,
  },
});
