import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/login/Login.js';
import UserData from './component/usercomponent/UserData';
import RegisterUser from './component/register/registerUser/registerUser.js';
import Navbar from './component/Navbar';
import UpdateUserComponent from './component/update/updateuser/UpdateUserComponent'

function App() {
  return (
    <Router>
      <Navbar />
      <hr />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/user' element={<UserData />} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/update_user' element={<UpdateUserComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
