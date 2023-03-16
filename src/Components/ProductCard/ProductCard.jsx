import { Link } from "react-router-dom";
import React from "react";
import "./ProductCard.css";
const ProductCard = ({ element }) => {
  return (
    <div className="containerCard">
      <h2>{element.title}</h2>
      <h2 className="price">$ {element.price}</h2>
      <img className="img" src={element.img} alt="" />
      <Link to={`/itemDetail/${element.id}`}>
        <button className="ver-mas">Ver más</button>
      </Link>
    </div>
  );
};

export default ProductCard;
