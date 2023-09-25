import React,{ useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../asynMock';
import ItemDetails from '../ItemDetails/ItemDetails';


const ItemDetailsContainer = () => {
  const [product, setProduct] = useState(null);

  const {itemId} = useParams ();

  
  useEffect(() => {
    getProductById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className='ItemDetailContainer'>
      <ItemDetails {...product} />
    </div>
  );
}

export default ItemDetailsContainer;
