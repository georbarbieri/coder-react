import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Header />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />

          <Route path="/sign-up" element={<Register />} />
          <Route
            path="*"
            element={
              <h1>
                No se encontró lo que se buscaba, por favor intente nuevamente
              </h1>
            }
          />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
