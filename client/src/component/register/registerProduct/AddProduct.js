import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux' 
import { addProductAction } from './AddProductAction';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card} from 'react-bootstrap';

const AddProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const {isLoading, AddProduct, error} = useSelector(state => state.addProduct)
  const dispatch = useDispatch()

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'quantity':
        setQuantity(value);
        break;
      case 'price':
        setPrice(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductAction({ name, quantity, price }));
    navigate('/admin_products');
    window.location.reload();
  };

  return (
    <>
      {error && <h1>you need to login</h1>}
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
          <Form.Group className='mb-3' controlId=''>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              name='name'
              placeholder='Enter name'
              onChange={handleOnchange}
              value={name}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type='quantity'
              name='quantity'
              placeholder='quantity'
              onChange={handleOnchange}
              value={quantity}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='price'
              name='price'
              placeholder='price'
              onChange={handleOnchange}
              value={price}
              required
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default AddProduct;
