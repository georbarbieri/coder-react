import{Link} from "react-router-dom"
import ListNavbar from "../ListNavbar/ListNavbar"
import "./Navbar.css"

const Navbar = ()=>{

    return (
        <ul className="categories" style={{ display: "flex",
        justifyContent: "space-around",
        gap: "80px", fontSize:"20px", color:"#cd0c36"}}>
            
            
            <Link to="/">
                <ListNavbar title="Todo"/>
            </Link>

            <Link to="/category/remeras">
                <ListNavbar title="Remeras"/>
            </Link>

            <Link to="/category/buzos">
                <ListNavbar title="Buzos"/>
            </Link>
            
            
            {/*<ListNavbar title="Tazas"/>
            <ListNavbar title="Pilusos"/>
            <ListNavbar title="Stickers"/>*/}
            
        </ul>

    )
}

export default Navbar