/* eslint-disable array-callback-return */
import "./FormCheckOut.css";
import { useState } from "react";
import {
  serverTimestamp,
  addDoc,
  collection,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
const FormCheckOut = ({ cart, total, clearCart, setOrderId }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    phone: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: userInfo,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => setOrderId(res.id))
      .catch((err) => console.log(err));

    cart.map((product) => {
      const refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, {
        stock: product.stock - product.quantity,
      });
    });
    clearCart();
  };
  return (
    <div className="user-buy">
      <h1>En caso de no tener cuenta</h1>
      <h2>
        Ingrese sus datos que se le solicitarán a continuación para completar la
        compra
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Ingrese su email</label>
        <input
          type="text"
          placeholder="Ingrese su email"
          name="email"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <label>Ingrese su número telefonico</label>
        <input
          type="text"
          placeholder="Ingrese su telefono"
          name="phone"
          onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
        />
        <button>Comprar</button>
        <button>
          <a href="/login">Ingresá a tu cuenta</a>
        </button>
      </form>
    </div>
  );
};

export default FormCheckOut;
