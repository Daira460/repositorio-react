import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetails from '../ItemDetails/ItemDetails';

const ItemDetailsContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    

    const productRef = doc(db, 'products', itemId);

    getDoc(productRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const productData = docSnap.data();
          setProduct(productData);
          console.log('Datos del producto cargados:', productData);
        } else {
          console.log('El documento del producto no existe');
        }
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
