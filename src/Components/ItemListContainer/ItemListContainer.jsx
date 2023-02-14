import { useEffect, useState } from "react";
import {products} from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

const ItemListContainer = ( ) => {

  const [ items, setItems]= useState ( [ ] )

  useEffect( ()=>{   
  

    const task = new Promise ( ( resolve, reject) => { 
    
      setTimeout(( )=> {
        resolve(products)
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
}, [ ] )

console.log("Mis items son: ", items)

    return (
      <>
        <ItemList items={items}/>

      </>
    )
}

export default ItemListContainer