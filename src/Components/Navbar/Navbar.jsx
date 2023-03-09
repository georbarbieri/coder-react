
import ListNavbar from "../ListNavbar/ListNavbar"
import "./Navbar.css"
import{Link, NavLink} from "react-router-dom"

const Navbar = ()=>{

    return (
        <ul className="categories" >
            
            
            <NavLink to="/" className={({isActive})=> isActive ? "active-navbar" : "navbar-item"}>
                <ListNavbar title="Todo"/>
            </NavLink>

            <NavLink to="/category/remeras" className={({isActive})=> isActive ? "active-navbar" : "navbar-item"}>
                <ListNavbar title="Remeras"/>
            </NavLink>

            <NavLink to="/category/buzos" className={({isActive})=> isActive ? "active-navbar" : "navbar-item"}>
                <ListNavbar title="Buzos"/>
            </NavLink>
            
            
            {/*<ListNavbar title="Tazas"/>
            <ListNavbar title="Pilusos"/>
            <ListNavbar title="Stickers"/>*/}
            
        </ul>

    )
}

export default Navbar