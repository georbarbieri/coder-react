import ListNavbar from "../ListNavbar/ListNavbar";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

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

      <NavLink
        to="/category/remeras"
        className={({ isActive }) =>
          isActive ? "active-navbar" : "navbar-item"
        }
      >
        <ListNavbar title="Remeras" />
      </NavLink>

      <NavLink
        to="/category/buzos"
        className={({ isActive }) =>
          isActive ? "active-navbar" : "navbar-item"
        }
      >
        <ListNavbar title="Buzos" />
      </NavLink>

      <NavLink
        to="/category/tazas"
        className={({ isActive }) =>
          isActive ? "active-navbar" : "navbar-item"
        }
      >
        <ListNavbar title="Tazas" />
      </NavLink>
      <NavLink
        to="/category/pilusos"
        className={({ isActive }) =>
          isActive ? "active-navbar" : "navbar-item"
        }
      >
        <ListNavbar title="Pilusos" />
      </NavLink>
      <NavLink
        to="/category/stickers"
        className={({ isActive }) =>
          isActive ? "active-navbar" : "navbar-item"
        }
      >
        <ListNavbar title="Stickers" />
      </NavLink>
    </ul>
  );
};

export default Navbar;
