import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'


const Cart = () => {

  const { cart, clearCart, deleteProductById, getTotalPrice}= useContext( CartContext)

console.log(cart)
  return (
    
        <div className='cart-style'>

            <h1>carrito de compras</h1>

                {
                  cart.map( item => {

                    return <div key= {item.id} style={{border: "2px solid red"}}>
                      <h3>Nombre: {item.title}</h3>
                      <h3>Precio: {item.price}</h3>
                      <h3>Cantidad: {item.quantity}</h3>
                      <button onClick={()=>deleteProductById(item.id)}>Eliminar producto</button>
                    </div>
                  })
                }

            <button onClick={clearCart}>Limpiar el carrito</button>
            <h1>El total del carrito de compra es de:     {getTotalPrice()}</h1>
        </div> 
  )
}

export default Cart