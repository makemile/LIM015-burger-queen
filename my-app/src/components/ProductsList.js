import React, { useState } from 'react';
// import Header from './Header';
// import './productsList.css';
// import Breakfast from './Breakfast';
// import './breakfast.css';
// import Lunch from './Lunch';
// import './lunch.css';

// const [data, setData] = useState([]);
// console.log(data);
// console.log(...data);

// useEffect(() => {
//   onSnapshot(collection(db, 'Table'), (snapshot) => {
//     setData(snapshot.docs.map((doc) => doc.data()));
//   });
// }, []);
// const breakfast = () => <div>Contenido de desayuno</div>;
// const lunch = () => <div>Contenido de almuerzo</div>;

function Products() {
  // const [isVisible, setIsVisible] = useState(true);
  const [isVisibleBf, setVisibleBf] = useState(true); // contenedor de desayuno visible
  const [isVisibleLunch, setVisibleLunch] = useState(false); // contenedor de almuerzo oculto

  function changeBfValue() {
    setVisibleBf(!isVisibleBf);
  }

  function chageLunchValue() {
    setVisibleLunch(!isVisibleLunch);
  }

  // function changeValue() {
  //   // si bf oculto
  //   if (setVisibleBf(!isVisibleBf)) {
  //     // mostrar almuerzo
  //     setVisibleLunch(isVisibleLunch);
  //     setVisibleBf(!isVisibleBf);
  //   } else {
  //     setVisibleLunch(!isVisibleLunch);
  //     setVisibleBf(isVisibleBf);
  //   }
  // }

  return (
    <>
      <button type="button" className="btn-breakfast" onClick={changeBfValue}>DESAYUNO</button>
      <button type="button" className="btn-lunch" onClick={chageLunchValue}>ALMUERZO</button>

      <div style={{ display: isVisibleBf ? 'block' : 'none' }}>Contenido de desayuno</div>
      <div style={{ display: isVisibleLunch ? 'block' : 'none' }}>Contenido de almuerzo</div>

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
