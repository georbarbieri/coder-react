import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ItemList.css";
const ItemList = ({ items }) => {
  return (
    <div className="list">
      {items.map((element) => {
        return <ProductCard element={element} key={element.id} />;
      })}
    </div>
  );
};

export default ItemList;
