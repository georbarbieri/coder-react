

import FetchingData from "./Components/FetchingData/FetchingData";
import Header from "./Components/Header/Header"
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Layout from "./Components/Layout/Layout";
//import LoginContainer from "./Components/LoginContainer/LoginContainer";
import UseEffect from "./Components/UseEffect/UseEffect";

function App() {


  const onAdd =(cantidad)=>{
    console.log(`Se agregaron al carrito ${cantidad} elementos`)
  }
  return (
    <div className="App">
      <Layout>
       <Header/>
        <ItemListContainer />
        <FetchingData />
        <ItemCount  stock={10} initial={0} onAdd={ onAdd} />



        
        <UseEffect/>
      </Layout>
      


    </div>
  );
}

export default App;
