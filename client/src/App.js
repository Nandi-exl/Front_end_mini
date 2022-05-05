import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/login/Login.js';
import UserData from './component/usercomponent/UserData';
import RegisterUser from './component/register/registerUser/registerUser.js';
import Navbar from './component/Navbar';
import UpdateUserComponent from './component/update/updateuser/UpdateUserComponent';
import Home from './Home';
import AddProduct from './component/register/registerProduct/AddProduct.js';
import ProductAdmin from './component/productcomponent/adminproduct/GetProductAdminComponent.js';
import UpdateProduct from './component/update/updateproduct/UpdateProduct.js';

function App() {
  return (
    <Router>
      <Navbar />
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<UserData />} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/update_user' element={<UpdateUserComponent />} />
        <Route path='/add_product' element={<AddProduct />} />
        <Route path='/admin_products' element={<ProductAdmin />} />
        <Route path='/update_product' element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
