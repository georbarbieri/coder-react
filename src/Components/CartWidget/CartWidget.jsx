import { Link } from "react-router-dom";

import { BsFillCartCheckFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="container-cart">
        <BsFillCartCheckFill className="check-fill" />
        <div className="bubble-counter">
          <span>{getTotalItems()}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
