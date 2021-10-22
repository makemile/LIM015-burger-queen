import React, { useState } from 'react';
import Header from './Header';
import './products.css';
import Breakfast from './Breakfast';
import './breakfast.css';
import Lunch from './Lunch';
import './lunch.css';
// querySnapshot

function Products() {
  const [visibleLunch, setLunch] = useState(true); // es false
  const [visibleBreakfast, setBreakfast] = useState(false);

  return (
    <>
      <Header />
      <section className="menu-section">
        <div className="menu-buttons-container">
          <button type="button" className="btn-breakfast" onClick={() => setBreakfast(true)}>DESAYUNO</button>
          <button type="button" className="btn-lunch" onClick={() => setLunch(true)}>ALMUERZO</button>
          {visibleLunch && <Lunch />}
          {visibleBreakfast && <Breakfast />}
        </div>

        <Breakfast />
      </section>
    </>

  );
}
export default Products;
