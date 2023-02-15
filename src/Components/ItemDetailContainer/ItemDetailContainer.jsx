import { useEffect, useState } from 'react'
import { products } from '../../productsMock'



const ItemDetailContainer = () => {


    
    const [product, setProduct] = useState({ })

let id = 2

        useEffect ( ()=>{

            let productSelected= products.find (prod => prod.id === id)

            setProduct(productSelected);
            
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [ ]);

            console.log(product)

    return (
        
        <div>ItemDetailContainer</div>

        
  )
}

export default ItemDetailContainer