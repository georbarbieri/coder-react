import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { CircleLoader } from "react-spinners";

import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

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
    const itemCollection = collection(db, "products");

    if (categoryId) {
      const q = query(itemCollection, where("category", "==", categoryId));

      getDocs(q)
        .then((res) => {
          const products = res.docs.map((products) => {
            return {
              ...products.data(),
              id: products.id,
            };
          });

          setItems(products);
        })
        .catch((err) => console.log("error: " + err));
    } else {
      getDocs(itemCollection)
        .then((res) => {
          const products = res.docs.map((products) => {
            return {
              ...products.data(),
              id: products.id,
            };
          });

          setItems(products);
        })
        .catch((err) => console.log("error: " + err));
    }
  }, [categoryId]);
  console.log(items);

  // useEffect(() => {
  //   const productsFiltred = products.filter(
  //     (product) => product.category === categoryId
  //   );

  //   const task = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(categoryId ? productsFiltred : products);
  //     }, 1500);
  //     //reject ("Error que diga algo")
  //   });

  //   task
  //     .then((res) => {
  //       setItems(res);
  //     })
  //     .catch((error) => {
  //       console.log("Aca se rechazó ", error);
  //     });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [categoryId]);

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
