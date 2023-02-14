
import React from 'react'

import "./ProductCard.css"

const ProductCard = ({element}) => {
  return (
    
    <div className="containerCard" >

                            <h2>{element.title}</h2>
                            <h2>{element.price}</h2>
                            <h3>{element.description}</h3>
                            <img src={element.img} alt="" style={{width: "100%", height:"200px"}} />

                        </div>
  )
}

export default ProductCard