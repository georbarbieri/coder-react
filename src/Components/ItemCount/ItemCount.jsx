import { useEffect, useState } from "react";
import "./ItemCount.css";
const ItemCount = ({ stock, initial = 1, agregarAlCarrito }) => {
  const [contador, setContador] = useState(initial);

  useEffect(() => {
    setContador(initial);
  }, [initial]);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="contador">
      <h1>{contador}</h1>
      <div className="btns">
        <button className="incremento" onClick={sumar}>
          +
        </button>
        <button className="agregar" onClick={() => agregarAlCarrito(contador)}>
          Agregar al carrito
        </button>
        <button className="incremento" onClick={restar}>
          -
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
