import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProductAction } from './component/productcomponent/GetProductAction';
import { Table } from 'react-bootstrap';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllProductAction());
  }, [dispatch]);

  return (
    <>
      {isLoading && <h1>Loading ..</h1>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const { id, name, quantity, price } = product;
            return (
              <>
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                </tr>
              </>
            );
          })}
        </tbody>
        {error && <h1>Error ...</h1>}
      </Table>
    </>
  );
};

export default Home;
