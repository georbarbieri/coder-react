import Navbar from "../Navbar/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-logo">
      <Link to="/">
        <h2 className="logo-navbar">
          <img
            src="https://res.cloudinary.com/dngvikhuw/image/upload/v1676162767/images%20fandom/iconoFanShop_pycu9h.png"
            alt=""
          />
        </h2>
      </Link>
      <Navbar />
      <CartWidget />
    </div>
  );
};

export default Header;
