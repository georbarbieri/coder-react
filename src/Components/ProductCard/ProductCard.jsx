import { Link } from "react-router-dom";
import React from "react";
import "./ProductCard.css";
const ProductCard = ({ element }) => {
  return (
    <div className="containerCard">
      <h2>{element.title}</h2>
      <h2 className="price">$ {element.price}</h2>
      <img
        className="img"
        src={element.img}
        alt=""
        style={{ width: "100%", height: "200px" }}
      />
      <Link to={`/itemDetail/${element.id}`}>
        <button
          className="ver-mas"
          style={{
            width: "100%",
            height: "50px",
            backgroundColor: " deeppink",
            alignItems: "center",
          }}
        >
          Ver más
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
