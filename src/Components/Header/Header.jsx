
import Navbar from "../Navbar/Navbar"
import CartWidget from "../CartWidget/CartWidget"


const Header =()=>{

    return(
        <div style={{display:"flex", width: "100%", height: "20vh", justifyContent:"space-between", alignItems:"center", backgroundColor:"#e44f9c",}}>
            <h2>Logo</h2>
            <h3>Fandom Shop</h3>
            <Navbar/>
            <CartWidget/>
        </div>
    )
}

export default Header