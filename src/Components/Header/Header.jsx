
import Navbar from "../Navbar/Navbar"
import CartWidget from "../CartWidget/CartWidget"


const Header =()=>{

    return(
        
        <div className="container-logo" style={{
            display: "flex",
            width: "100%",
            height: "200px",
            justifyContent: "space-between",
            backgroundColor:"#FFE2EC",
            alignItems: "center",
            boxShadow: "0px 0px 10px 2px #ff8e9a",
            padding: "0 10px",
          }}>
            <h2 className="logo-navbar" ><img src="https://res.cloudinary.com/dngvikhuw/image/upload/v1676162767/images%20fandom/iconoFanShop_pycu9h.png" alt="" style={{width:"200px", marginLeft:"50px"}}/></h2>

            <Navbar/>
            <CartWidget/>
        </div>

    )
}

export default Header