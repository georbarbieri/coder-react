import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({product}) => {

    const { addToCart, getQuantityById } = useContext(CartContext)

    const agregarAlCarrito = (cantidad)=> {
        
        const obj ={
            ...product,
            quantity: cantidad
        }
        addToCart ( obj )
    };

    const quantity = getQuantityById(product.id)
    console.log(quantity)

  return (


    <div>
        <div style={{paddingBottom:"100px"}}>
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
        </div>
        <ItemCount
            stock={product.stock}
            initial={quantity}
            agregarAlCarrito={agregarAlCarrito} 
        />
    </div>


  )
}

export default ItemDetail