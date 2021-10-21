import React from 'react';
import Header from './Header';
import './products.css';
import Breakfast from './Breakfast';
import './breakfast.css';
// import { useState } from 'react'
// querySnapshot

function Products() {
  return (
    <>
      <Header />
      <div className="menu-buttons-container">
        <button type="button" className="btn-breakfast" onClick={() => { alert('Diste click !!'); }}>DESAYUNO</button>
        <button type="button" className="btn-lunch">ALMUERZO</button>
      </div>

      <Breakfast />
    </>

  );
}
export default Products;
