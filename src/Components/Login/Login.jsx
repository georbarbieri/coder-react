
import React from 'react'

const Login = ({nombre, onSubmit}) => {


  return (
    <div>
        <h2>{nombre}</h2>
        <input type="text" placeholder='Ingresá tu nombre' />
        <button onClick={onSubmit}>Ingresar</button>
    </div>
  )
}

export default Login