import React from 'react';
import jsondata from '../data.json';

const productData = jsondata.data.slice();

function ProductTable() {
  return (
    <table style={{ margin: '0 auto' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {productData.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
