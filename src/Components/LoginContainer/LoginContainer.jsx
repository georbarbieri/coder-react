
import React from 'react'
import Login from '../Login/Login'

const LoginContainer = () => {
    const nombre ="Pepito"
    const onSubmit =()=> {
        console.log("Se envio el formulario")
    }
  return (
    <div>
        <Login nombre ={nombre} onSubmit={onSubmit}/>
    </div>
  )
}

export default LoginContainer