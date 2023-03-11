import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

import { CircleLoader } from "react-spinners";

const styles = {
  display: "block",
  margin: "0 auto ",
  marginTop: "150px",
  borderColor: "red",
};

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsFiltred = products.filter(
      (product) => product.category === categoryId
    );

    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryId ? productsFiltred : products);
      }, 2000);
      //reject ("Error que diga algo")
    });

    task
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log("Aca se rechazó ", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  return (
    <div className="cargando-productos">
      {items.length < 1 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircleLoader
            color={"red"}
            cssOverride={styles}
            size={200}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h1>Estamos cargando los productos...</h1>
          <h2>Disculpe la demora, estamos haciendo todo lo posible</h2>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
