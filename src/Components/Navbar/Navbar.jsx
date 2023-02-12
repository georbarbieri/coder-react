import ListNavbar from "../ListNavbar/ListNavbar"
import "./Navbar.css"

const Navbar = ()=>{

    return (
        <ul style={{ display: "flex",
        justifyContent: "space-around",
        gap: "80px", fontSize:"20px", color:"#cd0c36"}}>
            <ListNavbar title="Remeras"/>
            <ListNavbar title="Buzos"/>
            <ListNavbar title="Nosotrxs"/>
        </ul>

    )
}

export default Navbar