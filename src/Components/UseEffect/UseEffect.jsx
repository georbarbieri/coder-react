import {useState, useEffect} from 'react'

const UseEffect = () => {

    const [nombreUsuario, setNombreUsuario]=useState("Jorge")

    const cambiarNombre = ()=>{

        if (nombreUsuario === "Jorge"){
            setNombreUsuario("Pepito")
        }else{
            setNombreUsuario("Jorge")
        }
    }

    useEffect(()=>{
        console.log("Se ejecutó el useEffect")
    }, [ ])

    console.log("Hola")
  return (
    <div>
        <h1>Aca probamos el useEffect</h1>
        <h2>{nombreUsuario}</h2>
        <button onClick={cambiarNombre}>Cambiar Nombre</button>
    </div>
  )
}

export default UseEffect