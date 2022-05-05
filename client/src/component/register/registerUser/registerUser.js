import React, { useState } from 'react';
import { registerUserAction } from './registerUserAction';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Card, Spinner, Alert } from 'react-bootstrap';

const RegisterUser = () => {
  const { isLoading, error } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adress, setAdress] = useState('');
  const [phone_number, setPhone_number] = useState(Number);

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
      case 'adress':
        setAdress(value);
        break;
      case 'phone':
        setPhone_number(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerUserAction({ name, email, password, adress, phone_number })
    );
    navigate('/login');
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
          <Button variant='primary' type='submit'>
            Submit
          </Button>
          {isLoading && <Spinner variant='primary' animation='border' />}
        </Form>
      </Card>
    </>
  );
};

export default RegisterUser;
