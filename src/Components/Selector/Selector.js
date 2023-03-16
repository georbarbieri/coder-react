import React, { useState } from "react";
import ListNavbar from "../ListNavbar/ListNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const Selector = () => {
  const [dropdown, setDropdown] = useState(false);
  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div>
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="sm">
        <DropdownToggle caret className="botonDropdown">
          Categorias
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <NavLink
              to="/category/tazas"
              className={({ isActive }) =>
                isActive ? "active-navbar" : "navbar-item"
              }
            >
              <ListNavbar title="Tazas" />
            </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <NavLink
              to="/category/remeras"
              className={({ isActive }) =>
                isActive ? "active-navbar" : "navbar-item"
              }
            >
              <ListNavbar title="Remeras" />
            </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <NavLink
              to="/category/buzos"
              className={({ isActive }) =>
                isActive ? "active-navbar" : "navbar-item"
              }
            >
              <ListNavbar title="Buzos" />
            </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <NavLink
              to="/category/pilusos"
              className={({ isActive }) =>
                isActive ? "active-navbar" : "navbar-item"
              }
            >
              <ListNavbar title="Pilusos" />
            </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <NavLink
              to="/category/stickers"
              className={({ isActive }) =>
                isActive ? "active-navbar" : "navbar-item"
              }
            >
              <ListNavbar title="Stickers" />
            </NavLink>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Selector;
