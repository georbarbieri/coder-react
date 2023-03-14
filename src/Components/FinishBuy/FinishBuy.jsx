import React from "react";
import { Link } from "react-router-dom";

const FinishBuy = ({ orderId }) => {
  return (
    <div>
      <h1>Felicidades haz podido realizar la compra!</h1>
      <h2>A continuación te dejaré los datos del pedido que haz realizado</h2>

      <h2> El código de seguimiento de su compra es: </h2>
      <div>
        <h1>{orderId}</h1>
      </div>
      <h3>Esperamos que los super disfrutes</h3>
      <Link to="/">Volver a comprar</Link>
    </div>
  );
};

export default FinishBuy;
