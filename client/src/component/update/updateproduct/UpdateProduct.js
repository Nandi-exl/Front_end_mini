import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProduct } from '../../../api/productApi';
import { Form, Button, Card } from 'react-bootstrap';

const UpdateProduct = () => {
  const {isLoading, product, error} = useSelector(state => state.product)
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)

  const handleOnChange = (e) => {
      const {name, value} = e.target
      switch (name) {
          case 'name':
              setName(value)
              break;
          case 'quantity':
              setQuantity(value)
              break;
          case 'price':
              setPrice(value)
              break;
          default:
              break;
      }
  }

  const handleOnSubmit = () =>{
      updateProduct(product.id, { name, quantity, price });
      navigate('/admin_products')
      window.location.reload()
  }

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
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type='quantity'
              name='quantity'
              placeholder='quantity'
              onChange={handleOnChange}
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
              onChange={handleOnChange}
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

export default UpdateProduct;
