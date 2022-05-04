import React from 'react'
import { Nav } from 'react-bootstrap';
import { userLogOut } from '../api/userApi';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate()
  const logOut = () => {
    userLogOut()
    navigate('/')
  }

  return (
    <>
      <Nav
        activeKey='/home'
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className='justify-content-md-center'
      >
        <Nav.Item>
          <Nav.Link href='/'>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='disabled' disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={logOut}>Log Out</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar