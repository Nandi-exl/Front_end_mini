import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Spinner, Alert } from 'react-bootstrap';
import { updateUser } from '../../../api/userApi';
import { fetchAllUser } from '../../usercomponent/userAction';

const UpdateUserComponent = () => {
  const { isLoading, user, error } = useSelector((state) => state.userDetail);
  const [name, setName] = useState(user[0].name);
  const [email, setEmail] = useState(user[0].email);
  const [password, setPassword] = useState('');
  const [adress, setAdress] = useState(user[0].adress);
  const [phone_number, setPhone_number] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    updateUser(user[0].id, { name, email, password, phone_number, adress });
    navigate('/user');
    // dispatch(fetchAllUser()); //harus mencari cara untuk fecth token tampa login

    //untuk reload ketika menuju page tampa refreshtoken
     window.location.reload();
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'phone':
        setPhone_number(value);
        break;
      case 'adress':
        setAdress(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Card
        className='justify-content-md-center'
        style={{
          width: '20rem',
          padding: '2rem',
          borderRadius: '5%',
          margin: 'auto',
        }}
      >
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form.Group className='mb-3' controlId=''>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              name='name'
              placeholder='Enter name'
              onChange={handleOnChange}
              value={name}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='Enter email'
              onChange={handleOnChange}
              value={email}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              placeholder='Enter password'
              onChange={handleOnChange}
              value={password}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='adress'>
            <Form.Label>Adress</Form.Label>
            <Form.Control
              type='adress'
              name='adress'
              placeholder='Enter adress'
              onChange={handleOnChange}
              value={adress}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='phone_number'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type='phone'
              name='phone'
              placeholder='Enter phone'
              onChange={handleOnChange}
              value={phone_number}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
          {isLoading && <Spinner variant='primary' animation='border' />}
        </Form>
      </Card>
    </>
  );
};

export default UpdateUserComponent;
