import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductAdminAction } from './GetProductAdminAction';
import { Table } from 'react-bootstrap';
import { deleteProduct } from '../../../api/productApi';
import { productDetailActions } from '../productdetail/productDetailAction';
import { useNavigate } from 'react-router-dom';

const ProductAdmin = () => {
  const dispatch = useDispatch();
  const { isLoading, productsAdmin, error } = useSelector((state) => state.productAdmin);

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getProductAdminAction());
  }, [dispatch]);

  const handleDelete = (id) => {
      deleteProduct(id)
      dispatch(getProductAdminAction());
  }

  const handleEdit = (id) => {
    dispatch(productDetailActions(id))
    navigate('/update_product')
  }

  return (
    <>
      <Table striped bordered hover>
        {isLoading && <h1>Loading ..</h1>}
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {productsAdmin.map((product) => {
            const { id, name, quantity, price } = product;
            return (
              <>
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td>
                    <button onClick={() => handleEdit(id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <a href='/add_product'>
            <button>Add product</button>
          </a>
          <a href='/user'>
            <button>Check User</button>
          </a>
        </div>

        {/* {error && (
          <h1>
            You need to <a href='/login'> login </a> ..
          </h1>
        )} */}
      </Table>
    </>
  );
};

export default ProductAdmin;
