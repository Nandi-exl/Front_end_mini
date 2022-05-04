import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllUser } from './userAction';
import { deleteUser } from '../../api/userApi';
import { getUserDetailAction } from './userdetail/UserDetailAction';
// import { getUserById } from '../../api/userApi';

import { useNavigate } from 'react-router-dom';
const UserData = () => {
  const { users, isLoading, error } = useSelector((state) => state.user);

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

      {error && <p></p>}
    </>
  );
};

export default UserData;
