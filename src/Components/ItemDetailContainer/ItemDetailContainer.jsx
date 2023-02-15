import React, { useEffect, useState } from 'react'
import { products } from '../../productsMock'
import { useParams } from 'react-router-dom'




const ItemDetailContainer = () => {


    const {id} = useParams()
    const [product, setProduct] = useState({ })

//let id = 2

        useEffect ( ()=>{

            let productSelected= products.find (prod => prod.id === +id)

            setProduct(productSelected);
            
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [ ]);


    return (
        
        <div style={{paddingBottom: "100px", justifyContent:"flex.end", gap:"20px", margin:"100px", }}>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <h3>{product.description}</h3>
        <img src={product.img} alt="" />
        
      </div>

        
  )
}

export default ItemDetailContainer