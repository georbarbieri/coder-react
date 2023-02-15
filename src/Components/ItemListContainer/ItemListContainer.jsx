import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {products} from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

const ItemListContainer = ( ) => {

  const { categoryName} =useParams()
  console.log("Así llega categoryName", categoryName)

  const [ items, setItems]= useState ( [ ] )

  useEffect( ()=>{   
  
    const productsFiltred = products.filter((product)=> product.category === categoryName)

    const task = new Promise ( ( resolve, reject) => { 
    
      setTimeout(( )=> {
        resolve(categoryName ? productsFiltred : products)
      }, 500);
      //reject ("Error que diga algo")
  } )

  task
  .then( ( res ) =>{
    setItems(res);
  })
  .catch( ( error ) => {
    console.log("Aca se rechazó ", error)
  });
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [ categoryName] )


    return (
      <>
        <ItemList items={items}/>

      </>
    )
}

export default ItemListContainer