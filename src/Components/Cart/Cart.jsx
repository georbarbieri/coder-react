import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import NoData from "../../assets/images/No-data.svg";
import FormCheckOut from "../FormCheckOut/FormCheckOut";
import FinishBuy from "../FinishBuy/FinishBuy";
import "./cart.css";
const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice, getTotalItems } =
    useContext(CartContext);

  const [buy, setBuy] = useState(false);
  const [orderId, setOrderId] = useState(null);

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

  const total = getTotalPrice();
  if (orderId) {
    return <FinishBuy orderId={orderId} />;
  }
  return (
    <div>
      {!buy ? (
        <div className="cart-container">
          {cart.length < 1 ? (
            <div className="cart-no-item">
              <h1>No hay elementos en el carrito</h1>
              <img src={NoData} alt="" style={{ height: "350px" }} />
            </div>
          ) : (
            <div className="cart-style">
              <h1>Carrito de compras</h1>

              {cart.map((item) => {
                return (
                  <div key={item.id} className="cart-Item">
                    <img src={item.img} alt="imagen del producto" />
                    <div className="cart-item-info">
                      <h3>Nombre: {item.title}</h3>
                      <h3>Precio: {item.price}</h3>
                      <h3>Cantidad: {item.quantity}</h3>
                    </div>
                    <div className="contador"></div>
                    <button
                      onClick={() => deleteProductById(item.id)}
                      className="btn-quitar"
                    >
                      Quitar
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          <div className="cart-info">
            <h2>Descripcion del carrito:</h2>

            <h3>Cantidad de productos: {getTotalItems()}</h3>
            <h3>Precio total: {total > 0 ? total : "No hay items"}</h3>
            <h3>Descuentos: No hay descuentos aplicados</h3>
            <h3>Precio final: {"$" + total}</h3>

            {cart.length > 0 && (
              <div className="btn-cart">
                <button variant="contained" onClick={() => setBuy(true)}>
                  Ir al checkout
                </button>
                <button onClick={() => clearCartAlert()} variant="contained">
                  Vaciar carrito
                </button>
              </div>
            )}

            <h1>El total del carrito es ${total}</h1>
          </div>
        </div>
      ) : (
        <FormCheckOut
          cart={cart}
          total={total}
          clearCart={clearCart}
          setOrderId={setOrderId}
        />
      )}
    </div>
  );
};

export default Cart;
