import React from 'react';
import { Nav } from 'react-bootstrap';
import { userLogOut } from '../api/userApi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const logOut = () => {
    userLogOut();
    navigate('/login');
  };

  return (
    <>
      <Nav className='justify-content-md-center'>
        <Nav.Item>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/login'>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/register'>Register</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={logOut}>Log Out</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navbar;
