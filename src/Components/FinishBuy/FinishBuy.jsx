import React from "react";
import { Link } from "react-router-dom";
import "./FinishBuy.css";
const FinishBuy = ({ orderId }) => {
  return (
    <div className="felicidades">
      <h1>Felicidades haz podido realizar la compra!</h1>
      <div className="container-orden">
        <h3>Su orden se generó correctamente</h3>
        <p>Número de orden: {orderId}</p>
        <p>
          Recuerde revisar su correo para seguir las indicaciones y coordinar la
          entrega.
        </p>
        <p>¡Muchas gracias por su compra!</p>
      </div>
      <Link to="/" className="btn">
        Volver a comprar
      </Link>
    </div>
  );
};

export default FinishBuy;
