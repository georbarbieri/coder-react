
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ItemList = ({items}) => {


  return (
  <div style={{width:"100%",  display:"flex", justifyContent:"center", alignItems:"center", height:"60vh", flexWrap:"wrap", margin:"20px", padding:"10px", position:"relative"}}>
    {
        items.map((element)=>{
            return <ProductCard element={element} key={element.id}/>
        })
    }
  </div>)
}

export default ItemList