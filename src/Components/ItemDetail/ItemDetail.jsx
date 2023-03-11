import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";

const ItemDetail = ({ product }) => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const agregarAlCarrito = (cantidad) => {
    const obj = {
      ...product,
      quantity: cantidad,
    };
    addToCart(obj);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu producto fue agregado al carrito",
      showConfirmButton: true,
    });
  };

  const quantity = getQuantityById(product.id);
  console.log(quantity);

  return (
    <div>
      <div style={{ paddingBottom: "100px" }}>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <img src={product.img} alt="" />
      </div>
      <ItemCount
        stock={product.stock}
        initial={quantity}
        agregarAlCarrito={agregarAlCarrito}
      />
    </div>
  );
};

export default ItemDetail;
