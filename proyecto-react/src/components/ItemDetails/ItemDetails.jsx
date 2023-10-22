import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetails = ({id, name, img, category, description, price, stock})=> {
    const [quantityAdded, setQuantityAdded] = useState (0)

    const {addItem} = useContext (CartContext)
   
    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)

        const item = {
            id, name, price
        }
        addItem (item, quantity)
    }
    return (
    <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className='ItemImg'/>
        </picture>
        <section>
            <p className='Informacion'>
                categoria: {category}

            </p>
            <p className='Informacion'>
                precio: ${price}
            </p>
        </section>
        <footer className='ItemFooter'>
            {
                quantityAdded > 0 ?(
                    <Link to= '/cart' className= 'Option'>terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
        </footer>
    </article>
   
  )
}

export default ItemDetails