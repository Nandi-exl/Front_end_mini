import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../component/usercomponent/sliceUser';
import loginReducer from '../component/login/loginSlicer';
import registerReducer from '../component/register/registerUser/registerUserSlicer';
import userDetailReducer from '../component/usercomponent/userdetail/UserDetailSlicer';
import productsReducer from '../component/productcomponent/GetProductSlicer';
import productDetailReducer from '../component/productcomponent/productdetail/productDetailSlicer';
import productsAdminReducer from '../component/productcomponent/adminproduct/GetProductAdminSlicer';
import addProductReducer from '../component/register/registerProduct/AddProductSlicer';


export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    register: registerReducer,
    userDetail: userDetailReducer,
    products: productsReducer,
    product: productDetailReducer,
    productAdmin: productsAdminReducer,
    addProduct: addProductReducer,
  },
});
