import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";
import "./ItemDetail.css";

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

  return (
    <div className="container-item-detail">
      <div className="item-img">
        <img src={product.img} alt="" />
      </div>
      <div className="item-description" style={{ paddingBottom: "100px" }}>
        <h1>Titulo: {product.title}</h1>
        <h2>Precio: $ {product.price}</h2>
        <h3>Descripción de producto: {product.description}</h3>

        <ItemCount
          stock={product.stock}
          initial={quantity}
          agregarAlCarrito={agregarAlCarrito}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
