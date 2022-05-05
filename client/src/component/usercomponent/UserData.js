import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllUser } from './userAction';
import { deleteUser } from '../../api/userApi';
import { getUserDetailAction } from './userdetail/UserDetailAction';
import ProductAdmin from '../productcomponent/adminproduct/GetProductAdminComponent';

import { useNavigate } from 'react-router-dom';
const UserData = () => {
  const { users, isLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(fetchAllUser());
  }, [dispatch]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteUser(id);
    dispatch(fetchAllUser());
  };

  const handleUpdateUser = (id) => {
    dispatch(getUserDetailAction(id));
    navigate('/update_user');
  };

  return (
    <>
      {isLoading && <h1>Loading ...</h1>}
      {users.map((user) => (
        <>
          <div key={user.id}>
            <h1>{user.name}</h1>
            <button onClick={() => handleDelete(user.id)}>delete</button>
            <button onClick={() => handleUpdateUser(user.id)}>edit</button>
          </div>
        </>
      ))}
      <a href='/admin_products'>
        <button style={{ marginTop: '1rem' }}>Check Products</button>
      </a>
      {/* <ProductAdmin />
      <a href='/add_product'>
        <button>add product</button>
      </a> */}
    </>
  );
};

export default UserData;
