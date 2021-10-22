// function ListeProducts() {
//   return (

//     <>
//       <>
//         <grid container justify="center" />
//       </>
//     </>
//   );
// }

// export default ListeProducts;

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
const breakfast = () => <div>Contenido de desayuno</div>;
const lunch = () => <div>Contenido de almuerzo</div>;

function Products() {
  const [visibleLunch, setLunch] = useState(false);
  const [visibleBreakfast, setBreakfast] = useState(true);

  return (
    <>
      <button type="button" className="btn-breakfast" onClick={() => setBreakfast(true)}>DESAYUNO</button>
      <button type="button" className="btn-lunch" onClick={() => setLunch(true)}>ALMUERZO</button>

      { visibleLunch && breakfast()}
      { visibleBreakfast && lunch()}

    </>
  );
}
export default Products;

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
