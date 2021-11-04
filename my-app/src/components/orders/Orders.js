import React, { useState, useEffect } from 'react';
import { db } from '../../utils/firebaseConfig';
import { doc, updateDoc, getDoc } from "firebase/firestore";
import Header from '../Header';
import {Menu} from '../menu/Menu';
import { PurchaseOrder } from '../purchaseOrder/PurchaseOrder';
import LinkButton from '../ButtonLink';
import './orders.css';
// ----------------- ESTRUCTURA PARA VISTA MESAS ---------------- //

export function Tables() {
  const [data, setData] = useState([]);
  
  // console.log(tableselect)
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
          
          // console.log(obj);
        });
        setData([...Table]);
      });
  }, []);

  

  const ClickOrders = async (id) => {
    console.log(id);
    // setTableSelect(id);
    // console.log(tableselect)
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
    
    // ------------------ FUNCIÓN PARA AGREGAR PRODUCTO ---------------- //

     // Data de productos seleccionados
     const [productsSelected, setProductsSelected] = useState([]);

     // Estados de menu según su tipo
     const [type, setType] = useState('desayuno');

       
     const addProduct = async (id) => {

      console.log('addProducts')
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
             console.log()
         } else {
             setProductsSelected([...productsSelected, dataObj]);
         }
     }


    // ------------------ FUNCIÓN PARA REDUCIR PRODUCTO ---------------- //
    const reduceProducts = async(id) => {
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
                if(product.id === dataObj.id && product.count > 0) {
                    product.count = product.count - 1
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
    
//------------------------------CREANDO COLECCION-----------------------------------//
    // ------------------ ESTRUCTURA PARA VISTA DE MENU Y DETALLE DE COMPRA ---------------- //

    return (
      <>
    {/* SECCION HEADER */}
    <Header />

    <main className="products-section" >
      {/* SECCIÓN DE BOTONES */}
      <section className="menu-section">

        <div className="menu-buttons-container">
          <button type="button" className="btn-breakfast" id="desayuno"
          onClick={()=> setType('desayuno')}
          >
            DESAYUNO
          </button>
          <button type="button" className="btn-lunch" id="almuerzo"
          onClick={()=> setType('almuerzo')}
          >
            ALMUERZO
          </button>
        </div>

      </section>

      {/* SECCION DE PRODUCTOS */}
      <section className="menu-section-products">
          <Menu addProduct={addProduct} type={type}/>
      </section>

      {/* TABLA DE DETALLES DE LA ORDEN */}
      <section className="purchase-orders-section">
          <PurchaseOrder
          productsSelected={productsSelected}
          setProductsSelected={setProductsSelected}
          addProduct={addProduct} 
          reduceProducts={reduceProducts}
            />
      </section>
    </main>
  </>
);
};
