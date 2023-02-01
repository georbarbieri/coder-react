

import Header from "./Components/Header/Header"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Layout from "./Components/Layout/Layout";
import LoginContainer from "./Components/LoginContainer/LoginContainer";

function App() {

  return (
    <div className="App">
      <Layout>
        <Header/>
        <LoginContainer />
        <ItemListContainer usuario ="Maria" apellido="Lopez"/>
        <ItemListContainer usuario="Georgina" apellido="Barbieri"/>
        <ItemListContainer  usuario="Valeria" apellido="Aguirre"/>
      </Layout>
      


    </div>
  );
}

export default App;
