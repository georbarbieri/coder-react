import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

import NoData from "../../assets/images/No-data.svg";
const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  console.log(cart);

  const clearCartAlert = () => {
    Swal.fire({
      title: "Estás seguro de limpiar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero limpiarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Limpio!", "Su carrito está nuevamente vacio.", "success");
        clearCart();
      }
    });
  };

  return (
    <div className="cart-container">
      {cart.length < 1 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "75px",
          }}
        >
          <h1>No hay elementos en el carrito</h1>
          <img src={NoData} alt="" style={{ height: "350px" }} />
        </div>
      ) : (
        <div className="cart-style">
          <h1>Carrito de compras</h1>

          {cart.map((item) => {
            return (
              <div key={item.id} style={{ border: "2px solid red" }}>
                <h3>Nombre: {item.title}</h3>
                <h3>Precio: {item.price}</h3>
                <h3>Cantidad: {item.quantity}</h3>
                <button onClick={() => deleteProductById(item.id)}>
                  Quitar
                </button>
              </div>
            );
          })}

          <button onClick={() => clearCartAlert()} variant="contained">
            Limpiar el carrito
          </button>
          <h1>
            El precio total es:
            {getTotalPrice() > 0 ? getTotalPrice() : "  $0 (Cero pesos).-"}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
