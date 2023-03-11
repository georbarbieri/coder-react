import { Link } from "react-router-dom";

import { BsFillCartCheckFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div
        className="container-cart"
        style={{
          width: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          color: "#ff8e9a",
        }}
      >
        <BsFillCartCheckFill style={{ fontSize: "2rem", color: "#cd0c36" }} />
        <div
          className="bubble-counter"
          style={{
            width: "25px",
            height: "25px",
            border: "2px solid #cd0c36",
            borderRadius: "50%",
            position: "absolute",
            top: "-25px",
            display: "flex",
            color: "#cd0c36",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>{getTotalItems()}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
