import ListNavbar from "../ListNavbar/ListNavbar"
import "./Navbar.css"

const Navbar = ()=>{

    return (
        <ul>
            <ListNavbar title="Remeras"/>
            <ListNavbar title="Buzos"/>
            <ListNavbar title="Mochilas"/>
            <ListNavbar title="Tazas"/>
            <ListNavbar title="Otros Articulos"/>
            <ListNavbar title="Nosotrxs"/>
        </ul>

    )
}

export default Navbar