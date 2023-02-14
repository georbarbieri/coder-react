
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ItemList = ({items}) => {


  return (
  <div style={{width:"100%", backgroundColor:"#FFF4F8", display:"flex", justifyContent:"center", alignItems:"center", height:"60vh", flexWrap:"wrap", margin:"20px", padding:"10px", position:"relative"}}>
    {
        items.map((element)=>{
            return <ProductCard element={element}/>
        })
    }
  </div>)
}

export default ItemList