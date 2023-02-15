
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./Components/Header/Header"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Cart from "./Components/Cart/Cart";



function App() {

  return (
    //<div className="App">
      
       //
        //<ItemListContainer />
        //<ItemDetailContainer/>
        //<ItemCount  stock={10} initial={0} onAdd={ onAdd} />
    //</div>

    <BrowserRouter>
          
          <Header/>

          <Routes>

              <Route path="/"  element={<ItemListContainer/>}/>

              <Route path="/category/:categoryName" element={ <ItemListContainer  /> } />
              
              <Route path="/itemDetail/:id" element={<ItemDetailContainer/>}/>

              <Route path="/cart"  element={<Cart/>}/>

              <Route path="*"  element={<h1>Error 404 not found</h1>}/>

          </Routes>
    </BrowserRouter>

  );
}

export default App;
