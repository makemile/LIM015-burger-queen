import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore'; // Importar Firestore
import db from '../utils/firebaseConfig';

function Breakfast() {
  // Data de desayuno
  const [breakfast, setBreakfast] = useState([]);
  console.log(breakfast);

  useEffect(() => {
    onSnapshot(collection(db, 'Desayunos'), (snapshot) => {
      setBreakfast(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  
  return (
    <>
    <main className="breakfast-grid">
    {breakfast.map((product, index) => (
      <div className="container-breakfast" key={index}>
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
          <button type="button">AGREGAR</button>
        </div>
      </div>
    ))}
    </main>
    </>
  )
}
export default Breakfast;
