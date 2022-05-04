import React, { useState } from 'react';
import { Form, Button, Card, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from './loginAction';

const Login = () => {
  // const {getLoading, getError, getEmail, getPassword} = useSelector((state) => state.userReducers)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isAuth, error } = useSelector((state) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit =  (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }, () => {
      navigate('/user')
    }));
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
        <Form onSubmit={handleOnSubmit}>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='Enter email'
              onChange={handleOnChange}
              value={email}
              required
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
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

export default Login;
