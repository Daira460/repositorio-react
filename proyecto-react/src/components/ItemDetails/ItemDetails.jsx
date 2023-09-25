import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetails = ({id, name, img, category, description, price, stock})=> {
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
                Precio: $ {price}
            </p>
        </section>
        <footer className='ItemFooter'>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada')}/>
        </footer>
    </article>
   
  )
}

export default ItemDetails