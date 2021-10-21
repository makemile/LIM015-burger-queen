import React from 'react';
import Header from './Header';
import './products.css';

function Products() {
  return (
    <>
      {' '}
      <Header />
      {/* <button type="button" className="btn-desayuno">Desayuno</button> */}
      <button type="button" onClick={() => { alert('Diste click !!'); }}>Dame click</button>

      <button type="button" className="btn-almuerzo"> Hola Almuerzos</button>
      <div className="desayunos"> hola desayuno</div>
      <div
        className="almuerzo"
        style={{ display: 'none' }}
      >
        {' '}
        hola almuerzo
        {' '}

      </div>
    </>

  );
}
export default Products;
