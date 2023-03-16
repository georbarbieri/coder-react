import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";
import { getDoc, collection, doc } from "firebase/firestore";
import "./ItemDetailContainer.css";
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
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
  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);

    getDoc(ref)
      .then((res) => {
        setProduct({
          ...res.data(),
          id: res.id,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container-item-detail">
      <div className="item-img">
        <img src={product.img} alt="" />
      </div>
      <div className="item-description">
        <h1>Titulo: {product.title}</h1>
        <h2>Precio: $ {product.price}</h2>
        <h3>Descripción de producto: {product.description}</h3>
        <h3>Categoria: {product.category}</h3>
        <ItemCount
          stock={product.stock}
          initial={quantity}
          agregarAlCarrito={agregarAlCarrito}
        />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
