import React, { useState, useEffect } from 'react';
import { db } from '../../utils/firebaseConfig';
import { doc, updateDoc, getDoc } from "firebase/firestore";
import Header from '../Header';
import {Menu} from '../menu/Menu';
import { PurchaseOrder } from '../purchaseOrder/PurchaseOrder';
import LinkButton from '../ButtonLink';

// ----------------- ESTRUCTURA PARA VISTA MESAS ---------------- //

export function Tables() {
  const [data, setData] = useState([]);
  // const [status, setData] = useState([]);
  useEffect(() => {
    db.collection("Table")
      .orderBy("name", "asc")
      .get()
      .then((querySnapshot) => {
        const Table = [];
        querySnapshot.forEach((doc) => {
          let id = doc.id;
          let name = doc.data().name;
          let status = doc.data().status;
          let obj = { id, name, status };
          Table.push(obj);
          console.log(obj);
        });
        setData([...Table]);
      });
  }, []);

  const ClickOrders = async (id) => {
    const statusRef = doc(db, "Table", id);
    await updateDoc(statusRef, {
      status: false,
    });
  };

  return (
    <>
      <Header />
      {/* Grilla de mesas */}
      <section>
        <div className="tables-container">
          {data.map((Table) => (
            <>
              {console.log(Table.id, 41)}
              <LinkButton
                to={`/order/${Table.id}`}
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
  );
}

// ----------------- ESTRUCTURA PARA VISTA DE ORDERS ---------------- //

export function Orders() {

    // Función para botones 
    // function showAccordingToType(e) {
    //    const container = document.getElementsByClassName('container-breakfast');

    //     if (e.target.className == 'btn-breakfast') {
    //         const bf = products.filter((product) => product.type == 'desayuno');
    //         console.log(bf)
    //         console.log(container)
           
        
    //     } else if (e.target.className == 'btn-lunch') {
    //         const lunch = products.filter((product) => product.type == 'almuerzo');
    //          console.log(lunch)
             
    //     }
    //   }
    
    // ------------------ FUNCIÓN PARA AGREGAR PRODUCTO ---------------- //

     // Data de productos seleccionados
     const [productsSelected, setProductsSelected] = useState([]);
    //  console.log(productsSelected, 'productos seleccionados')
       
     const addProduct = async (id) => {
         // Acceder a la data del producto seleccionado
         const productsRef = doc(db, 'Products', id);
         // Traer la data
         const docSnap = await getDoc( productsRef);
     
         const docData = docSnap.data();
     
         const dataObj = {
           id: id,
           name: docData.name,
           price: docData.price,
           count: 1
         };
 
         const existInArray = productsSelected.some((product) => product.id === dataObj.id)
         if(existInArray) {
             const products = productsSelected.map((product) => {
                 if(product.id === dataObj.id) {
                     product.count = product.count + 1
                     return product
                 } else {
                     return product
                 }
             }) 
             setProductsSelected([...products]);
         } else {
             setProductsSelected([...productsSelected, dataObj]);
         }
     }

    // ------------------ ESTRUCTURA PARA VISTA DE MENU Y DETALLE DE COMPRA ---------------- //

    return (
      <>
    {/* SECCION HEADER */}
    <Header />

    <main className="products-section" >
      {/* SECCIÓN DE BOTONES */}
      <section className="menu-section">

        <div className="menu-buttons-container">
          <button type="button" className="btn-breakfast"
          // onClick={(e) => showAccordingToType(e)}
          >
            DESAYUNO
          </button>
          <button type="button" className="btn-lunch"
          // onClick={(e) => showAccordingToType(e)}
          >
            ALMUERZO
          </button>
        </div>

      </section>

      {/* SECCION DE PRODUCTOS */}
      <section className="menu-section-breakfast">
          <Menu addProduct={addProduct} />
      </section>

      {/* TABLA DE DETALLES DE LA ORDEN */}
      <section className="purchase-orders-section">
          <PurchaseOrder
          productsSelected={productsSelected}/>
      </section>
    </main>
  </>
);
};
