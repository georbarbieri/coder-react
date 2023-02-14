import React, { useEffect, useState } from 'react'
import { products } from '../../productsMock'



const ItemDetailContainer = () => {

    const [product, setProduct] = useState({ })

let id = 2

    useEffect ( ()=>{

        let productSelected= products.find (prod => prod.id === id)

        setProduct(productSelected)
        
    }, [ ])

    console.log(product)
  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer