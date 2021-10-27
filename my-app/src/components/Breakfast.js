import React, { useState, useEffect } from 'react';
// import { collection, onSnapshot } from 'firebase/firestore'; // Importar Firestore
import { db } from '../utils/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import {PurchaseOrder} from './PurchaseOrder';

function Breakfast() {
  // Data de desayuno
  const [breakfast, setBreakfast] = useState([]);
  // console.log(breakfast);

  useEffect(() => {
    db.collection('Desayunos')
    .orderBy('name', 'asc')
    .get()
    .then((querySnapshot) => {
      const bf = [];
      querySnapshot.forEach(doc => {
        const obj = {
          id: doc.id,
          img: doc.data().img,
          name: doc.data().name,
          price: doc.data().price,
        }
        bf.push(obj);
        // console.log(obj)
      })
      setBreakfast([...bf]);
    })
  }, [])

  // Obtener data de producto seleccionado (PRUEBA)
  const [dataProducts, setDataProducts] = useState([]);
  // console.log(dataProducts, 'final')

  const addProduct = async (id) => {

    // Acceder a la data del producto seleccionado
    const breakfastRef = doc(db, "Desayunos", id);
    // Traer la data
    const docSnap = await getDoc(breakfastRef);
  
    const docData = docSnap.data();

      const dataObj = {
        id: id,
        name: docData.name,
        price: docData.price,
      }
      // console.log(dataObj)
      setDataProducts(dataObj)
  }

  return (
    <>
    <main className="breakfast-grid">
    {breakfast.map((product) => (
      <div className="container-breakfast" key={product.id}>
        <div className="content-breakfast">
          <div className="visual-breakfast">
            <figure className="breakfast-figure">
              <img className="product-img" src={product.img} alt={product.name} />
              <span className="breakfast-price"><strong>S/.{product.price}.00</strong></span>
            </figure>
          </div>
          <div className="breakfast-details">
            <h3>{product.name}</h3>
          </div>
          {/* <button type="button">AGREGAR</button> */}
          <button type="button" onClick={()=> addProduct(product.id)}>AGREGAR</button>
        </div>
      </div>
    ))}
    </main>
    <PurchaseOrder style={{ display: 'hidden' }} dataProducts={dataProducts}/>
    </>
  )
}
export default Breakfast;
