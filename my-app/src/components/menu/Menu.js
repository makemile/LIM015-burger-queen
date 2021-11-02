import React, { useState, useEffect } from "react";
import { db } from '../../utils/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

export function Menu() {

  const [productsSelected, setProductsSelected] = useState([]);
  console.log(productsSelected)
    const [products, setProducts] = useState([]);
   
    // console.log(productsSelected, 'productos seleccionados')

    // console.log(productsSelected);
  
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

    
    const addProduct = async (id) => {
      console.log(id)
        const productsRef = doc(db, 'Products', id);
        // Traer la data
        const docSnap = await getDoc( productsRef);
    
        const docData = docSnap.data();
    
        const dataObj = {
          id: id,
          name: docData.name,
          price: docData.price,
          count: 1
        };

        const existInArray = productsSelected.some((product) => product.id === dataObj.id)
        if(existInArray) {
            const products = productsSelected.map((product) => {
                if(product.id === dataObj.id) {
                  console.log(product)
                    product.count = product.count + 1
                    return product
                } else {
                    return product
                }
            }) 
           
            setProductsSelected([...products]);
        } else {
            setProductsSelected([...productsSelected, dataObj]);
        }
      };

    return (
        <>
        <main className="breakfast-grid">
            {products.map((product) => (
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

                <button type="button" onClick={() => addProduct(product.id)}>
                    AGREGAR
                </button>

                </div>
            </div>
            ))}
        </main>
    </>
  );
}