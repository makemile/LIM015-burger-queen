import React, { useState, useEffect } from "react";
import { db } from '../../utils/firebaseConfig';
// import { Orders } from '../orders/Orders'
// import { doc, getDoc } from "firebase/firestore";
// import { PurchaseOrder } from '../purchaseOrder/PurchaseOrder';

export function Menu(props) {
    // Data de productos
    const [products, setProducts] = useState([]);
   
    // console.log(productsSelected, 'productos seleccionados')

    useEffect(() => {
      db.collection("Products")
        .orderBy("name", "asc")
        .get()
        .then((querySnapshot) => {
          const arrayProducts = [];
          querySnapshot.forEach((doc) => {
            const obj = {
              id: doc.id,
              type: doc.data().type,
              img: doc.data().img,
              name: doc.data().name,
              price: doc.data().price,
            };
            arrayProducts.push(obj);
            // console.log(obj)
          });
          setProducts([...arrayProducts]);
        });
    }, []);
    
    return (
        <>
        <main className="breakfast-grid">

            {products
            .filter((product) => product.type === props.type)
            .map((product) => (
            <div className="container-breakfast" key={product.id}>
                <div className="content-breakfast">
                <div className="visual-breakfast">
                    <figure className="breakfast-figure">
                    <img
                        className="product-img"
                        src={product.img}
                        alt={product.name}
                    />
                    <span className="breakfast-price">
                        <strong>S/.{product.price}.00</strong>
                    </span>
                    </figure>
                </div>
                <div className="breakfast-details">
                    <h3>{product.name}</h3>
                </div>

                <button type="button" onClick={() => props.addProduct(product.id)}>
                    AGREGAR
                </button>

                </div>
            </div>
            ))}
        </main>
    </>
  );
}