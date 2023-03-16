import ListNavbar from "../ListNavbar/ListNavbar";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Selector from "../Selector/Selector";

const Navbar = () => {
  return (
    <ul className="categories">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active-navbar" : "navbar-item"
        }
      >
        <ListNavbar title="Todo" />
      </NavLink>
      <Selector />
    </ul>
  );
};

export default Navbar;
