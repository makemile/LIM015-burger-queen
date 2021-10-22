import React, { useState, useEffect } from 'react';
// import { collection } from 'firebase/firestore';
import { collection, onSnapshot } from 'firebase/firestore'; // Importar Firestore
// import querySnapshot from '../utils/firestore';
import { db } from '../utils/firebaseConfig';

// console.log(lunchCollection);
// return lunchCollection.docs.map((doc) => ({ id: doc.id, docdata: doc.data() }));
// async function getLunch() {
//   const lunchData = await querySnapshot(db, 'lunch');
//   lunchData.docs.forEach((doc) => (`${doc.id}, ${doc.data()}`));
// }

function Lunch() {
  // db.collection('lunch').doc('1').onSnapshot((document) => console.log(document.data()));

  const [lunch, setLunch] = useState([]);
  console.log(lunch);
  console.log(...lunch);

  useEffect(() => {
    onSnapshot(collection(db, 'lunch'), (snapshot) => {
      setLunch(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  lunch.map((product) => console.log(product.name));

  return (
    //     {/* <!------------------------------ Contenedor 1 --------------------------------> */}
    <div className="container-burger">
      <div className="content-burger">
        <div className="visual-burger">
          <figure className="burger-img">
            <img src="https://i.postimg.cc/gJLzn9KP/hmb-doble.png" alt="" />
            <span className="price-burger"><strong>S/. 15.00</strong></span>
          </figure>
        </div>

        <div className="product-details-burger">
          <h3>Hamburguesa Doble</h3>
        </div>

        {/* <div className="select-opt">
          <select name="burger-types" defaultValue={'DEFAULT'}>
            <option value="value1">res</option>
            <option value="value2" selected>vegetariana</option>
            <option value="value3">pollo</option>
          </select>
        </div> */}

        <div className="additions">
          <p><strong>Agregados S/.1</strong></p>
          <input type="radio" id="queso" name="type" value="queso" />
          <label htmlFor="queso">Queso</label>

          <input type="radio" id="huevo" name="type" value="huevo" />
          <label htmlFor="huevo">Huevo</label>
        </div>
        <button type="button">AGREGAR</button>
      </div>
    </div>
  );
}

export default Lunch;
// return (
//   <section className="menu-section-lunch">

//     {/* <!------------------------------ Contenedor 1 --------------------------------> */}
//     <div className="container-burger">
//       <div className="content-burger">
//         <div className="visual-burger">
//           <figure className="burger-img">
//             <img src="https://i.postimg.cc/gJLzn9KP/hmb-doble.png" alt="" />
//             <span className="price-burger"><strong>S/. 15.00</strong></span>
//           </figure>
//         </div>

//         <div className="product-details-burger">
//           <h3>Hamburguesa Doble</h3>
//         </div>

//         {/* <div className="select-opt">
//           <select name="burger-types" defaultValue={'DEFAULT'}>
//             <option value="value1">res</option>
//             <option value="value2" selected>vegetariana</option>
//             <option value="value3">pollo</option>
//           </select>
//         </div> */}

//         <div className="additions">
//           <p><strong>Agregados S/.1</strong></p>
//           <input type="radio" id="queso" name="type" value="queso" />
//           <label htmlFor="queso">Queso</label>

//           <input type="radio" id="huevo" name="type" value="huevo" />
//           <label htmlFor="huevo">Huevo</label>
//         </div>
//         <button type="button">AGREGAR</button>
//       </div>
//     </div>

//     {/* <!------------------------------ Contenedor 2 --------------------------------> */}
//     <div className="container-burger">
//       <div className="content-burger">
//         <div className="visual-burger">
//           <figure className="burger-img">
//             <img src="https://i.postimg.cc/gJLzn9KP/hmb-doble.png" alt="" />
//             <span className="price-burger"><strong>S/. 15.00</strong></span>
//           </figure>
//         </div>

//         <div className="product-details-burger">
//           <h3>Hamburguesa Doble</h3>
//         </div>

//         {/* <div className="select-opt">
//           <select name="burger-types">
//             <option value="value1">res</option>
//             <option value="value2" selected>vegetariana</option>
//             <option value="value3">pollo</option>
//           </select>
//         </div> */}

//         <div className="additions">
//           <p><strong>Agregados S/.1</strong></p>
//           <input type="radio" id="queso" name="type" value="queso" />
//           <label htmlFor="queso">Queso</label>

//           <input type="radio" id="huevo" name="type" value="huevo" />
//           <label htmlFor="huevo">Huevo</label>
//         </div>
//         <button type="button">AGREGAR</button>
//       </div>
//     </div>

//     {/* <!------------------------------ Contenedor 3 --------------------------------> */}
//     <div className="container-lunch">
//       <div className="content-lunch">
//         <div className="visual-lunch">
//           <figure className="lunch-figure">
//             <img src="https://i.postimg.cc/XJhnmfyk/burgerking-cafe.png" alt="" />
//             <span className="lunch-price"><strong>S/. 5.00</strong></span>
//           </figure>
//         </div>
//         <div className="lunch-details">
//           <h3>Café Americano</h3>
//         </div>
//         <button type="button" className="lunch-btn">AGREGAR</button>
//       </div>
//     </div>
//     {/* <!------------------------------ Contenedor 4 --------------------------------> */}
//     <div className="container-lunch">
//       <div className="content-lunch">
//         <div className="visual-lunch">
//           <figure className="lunch-figure">
//             <img src="https://i.postimg.cc/XJhnmfyk/burgerking-cafe.png" alt="" />
//             <span className="lunch-price"><strong>S/. 5.00</strong></span>
//           </figure>
//         </div>
//         <div className="lunch-details">
//           <h3>Café Americano</h3>
//         </div>
//         <button type="button" className="lunch-btn">AGREGAR</button>
//       </div>
//     </div>
//     {/* <!------------------------------ Contenedor 5 --------------------------------> */}
//     <div className="container-lunch">
//       <div className="content-lunch">
//         <div className="visual-lunch">
//           <figure className="lunch-figure">
//             <img src="https://i.postimg.cc/XJhnmfyk/burgerking-cafe.png" alt="" />
//             <span className="lunch-price"><strong>S/. 5.00</strong></span>
//           </figure>
//         </div>
//         <div className="lunch-details">
//           <h3>Café Americano</h3>
//         </div>
//         <button type="button" className="lunch-btn">AGREGAR</button>
//       </div>
//     </div>

//     {/* <!------------------------------ Contenedor 6 --------------------------------> */}
//     <div className="container-lunch">
//       <div className="content-lunch">
//         <div className="visual-lunch">
//           <figure className="lunch-figure">
//             <img src="https://i.postimg.cc/XJhnmfyk/burgerking-cafe.png" alt="" />
//             <span className="lunch-price"><strong>S/. 5.00</strong></span>
//           </figure>
//         </div>
//         <div className="lunch-details">
//           <h3>Café Americano</h3>
//         </div>
//         <button type="button" className="lunch-btn">AGREGAR</button>
//       </div>
//     </div>

//   </section>
// );
