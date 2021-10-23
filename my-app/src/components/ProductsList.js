import React, { useState, useEffect } from 'react';
import Header from './Header';
import './productsList.css';
import { collection, onSnapshot } from 'firebase/firestore'; // Importar Firestore
import db from '../utils/firebaseConfig';
import Breakfast from './Breakfast';
import './breakfast.css';
// import Lunch from './Lunch';
// import './lunch.css';

function Products() {
  // Eventos para los botones
  const [isVisibleBf, setVisibleBf] = useState(true); // contenedor de desayuno visible
  const [isVisibleLunch, setVisibleLunch] = useState(false); // contenedor de almuerzo oculto

  function changeValue() {
    setVisibleBf(!isVisibleBf);
    setVisibleLunch(!isVisibleLunch);
  }

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
      {/* <button type="button" className="btn-breakfast" onClick={changeValue}>DESAYUNO</button>
      <button type="button" className="btn-lunch" onClick={changeValue}>ALMUERZO</button> */}

      {/* <div style={{ display: isVisibleBf ? 'block' : 'none' }}>
        Contenido de desayuno
      </div>
      <div style={{ display: isVisibleLunch ? 'block' : 'none' }}>
        Contenido de almuerzo
      </div> */}

      {/* SECCION HEADER */}
      <Header />

      <main className="products-section">
      {/* BOTONES */}
        <section className="menu-section">
          <div className="menu-buttons-container">
            <button type="button" className="btn-breakfast" onClick={changeValue}>DESAYUNO</button>
            <button type="button" className="btn-lunch" onClick={changeValue}>ALMUERZO</button>
          </div>
        </section>

      {/* SECCION DE DESAYUNO */}
        <section className="menu-section-breakfast" style={{ display: isVisibleBf ? 'block' : 'none' }}>
          <Breakfast/>
        </section>
      {/* ALMUERZO */}
        <div style={{ display: isVisibleLunch ? 'block' : 'none' }}>
          Contenido de almuerzo
        </div>
      </main>
    </>
  );
}
export default Products;

// {data.length ? (
//   data.map((Table) => (

//     <section>
//       <grid key={Table.id} className="tables-container">
//         <button type="button" className="table-button">{Table.name}</button>
//       </grid>
//     </section>
//   ))
// ) : (<p>hola</p>)}

// function Products() {
//   const [visibleLunch, setLunch] = useState(true); // es false
//   const [visibleBreakfast, setBreakfast] = useState(false);

//   return (
//     <>
//       <Header />
//       <section className="menu-section">
//         <div className="menu-buttons-container">
//           <button type="button" className="btn-breakfast" onClick={() =>
// setBreakfast(true)}>DESAYUNO</button>
//           <button type="button" className="btn-lunch" onClick={() =>
// setLunch(true)}>ALMUERZO</button>
//           {visibleLunch && <Lunch />}
//           {visibleBreakfast && <Breakfast />}
//         </div>

//         <Breakfast />
//       </section>
//     </>

//   );
// }
// export default Products;
