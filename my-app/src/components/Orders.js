import React, { useState, useEffect } from 'react';
import Header from './Header';
import './orders.css';
import Breakfast from './Breakfast';
import './breakfast.css';
// import Lunch from './Lunch';
import './lunch.css';
import './tables.css';
import { db } from '../utils/firebaseConfig';
import LinkButton from './ButtonLink';
import { ProductsBurger, ProductsLunch } from './Lunch';
//PARTE KENGYA

// ----------------- ESTRUCTURA PARA VISTA MESAS ---------------- //

export function Tables() {
  const [data, setData] = useState([]);
  // const [status, setData] = useState([]);
  useEffect(() => {
    db.collection('Table')
    .orderBy('name', 'asc')
    .get()
    .then((querySnapshot)=>{
      const Table = [];
      querySnapshot.forEach((doc) =>{
        let id = doc.id;
        let name = doc.data().name;
        let status = doc.data().status;
        let obj = {id, name, status};
        Table.push(obj);
        console.log(obj);
    })
    setData([...Table]);
    })
  }, []);

  const ClickOrders = (e) => {
    if(db.collection('Table').doc().update({status:false})) {
      console.log(e)
    }
  };

  return (
    <>
      <Header />
      {/* Grilla de mesas */}
      <section>
      <div className="tables-container">
         {data.map((Table) => (
           <>
             {console.log(Table.id,41)}
                <LinkButton to = {`/order/${Table.id}`}
                  type="button"
                  key = {Table.name}
                  className="table-button"
                  onClick={(e) => { 
                  ClickOrders(e)
                  }}
                >
                {Table.name}
                </LinkButton>
            </>
        ))}
         </div>
      </section>
    </>
  )
};

// ----------------- ESTRUCTURA PARA VISTA DE MENU Y TABLA DE PEDIDOS ---------------- //
// PARTE PIERINA
export function Products() {
  // Eventos para los botones
  const [isVisibleBf, setVisibleBf] = useState(true); // contenedor de desayuno visible
  const [isVisibleLunch, setVisibleLunch] = useState(false); // contenedor de almuerzo oculto

  function BreakfastBtn(e) {
    if (e.target.className === 'btn-breakfast') {
      setVisibleBf(true)
      setVisibleLunch(false);
    }
  }
  function LunchBtn(e) {
    if (e.target.className === 'btn-lunch') {
      setVisibleBf(false)
      setVisibleLunch(true);
    }
  }
  return (
    <>
      {/* SECCION HEADER */}
      <Header />

      <main className="products-section">
      {/* BOTONES */}
        <section className="menu-section">
          <div className="menu-buttons-container">
            <button type="button" className="btn-breakfast" onClick={BreakfastBtn}>DESAYUNO</button>
            <button type="button" className="btn-lunch" onClick={LunchBtn}>ALMUERZO</button>
          </div>
        </section>

      {/* SECCION DE DESAYUNO */}
        <section className="menu-section-breakfast" style={{ display: isVisibleBf ? 'block' : 'none' }}>
          <Breakfast/>
        </section>

      {/* ALMUERZO */}
        <section className="lunch-section-breakfast" style={{ display: isVisibleLunch ? 'block' : 'none' }}>
          <ProductsBurger/>
          <ProductsLunch/>
        </section>
      </main>
    </>
  );
};
