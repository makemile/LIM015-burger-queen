import React, { useState, useEffect } from 'react';
import { doc, updateDoc } from "firebase/firestore";
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
import { PurchaseOrder } from './PurchaseOrder'
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

  const ClickOrders = async (id) => {
    const statusRef = doc(db, "Table", id);
    await updateDoc(statusRef, {
      status: false
    });
  }
  
  return (
    <>
      <Header />
      {/* Grilla de mesas */}
      <section>
      <div className="tables-container">
         {data.map((Table) => (
           <>
             {console.log(Table.id,41)}
                <LinkButton to={`/order/${Table.id}`}
                  type="button"
                  key={Table.id}
                  className="table-button"
                  onClick={() => ClickOrders(Table.id)}
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

      {/* TABLA DE DETALLES DE LA ORDEN */}
        <section className="purchase-orders-section">
          <PurchaseOrder/>
        </section>
      </main>
    </>
  );
};
