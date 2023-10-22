import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ products, greeting }) => {
  return (
    <div className='ListGroup'>
      {products.map(product => <Item key={product.id} {...product} greeting={greeting} />)}
    </div>
  );
}

export default ItemList;
