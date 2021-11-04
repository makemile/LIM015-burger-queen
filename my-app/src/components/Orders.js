import React, { useState, useEffect } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import Header from "./Header";
import "./orders.css";
import "./breakfast.css";
// import Lunch from './Lunch';
import "./lunch.css";
import "./tables.css";
import { db } from "../utils/firebaseConfig";
import LinkButton from "./ButtonLink";
import Breakfast from "./Breakfast";
import { ProductsBurger, ProductsLunch } from "./Lunch";
import { PurchaseOrder } from "./PurchaseOrder";
//PARTE KENGYA

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
          // console.log(obj);
        });
        setData([...Table]);
      });
  }, []);
  
  
  const [tableselect, setTableSelect] = useState('');
  
  
  
  const ClickOrders = (id) => {

    useEffect(()=> {
      setTableSelect(id)
    })
    console.log(id)
    updateTable (id)
     
     console.log(tableselect)
    //  const statusRef = doc(db, "Table", id);
    //  await updateDoc(statusRef, {
    //    status: false,
    //  });
    
   };

  async function updateTable (id) {
    const statusRef = doc(db, "Table", id);
    await updateDoc(statusRef, {
      status: false,
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

// ----------------- ESTRUCTURA PARA VISTA DE MENU Y TABLA DE PEDIDOS ---------------- //
// PARTE PIERINA
export function Products() {
  // Eventos para los botones
  const [isVisibleBf, setVisibleBf] = useState(true); // contenedor de desayuno visible
  const [isVisibleLunch, setVisibleLunch] = useState(false); // contenedor de almuerzo oculto
  const [dataBreakfast, setDataBreakfast] = useState([]);
  
  

  function BreakfastBtn(e) {
    if (e.target.className === "btn-breakfast") {
      setVisibleBf(true);
      setVisibleLunch(false);
    }
  }
  function LunchBtn(e) {
    if (e.target.className === "btn-lunch") {
      setVisibleBf(false);
      setVisibleLunch(true);
    }
  }

  // ------------------------Breakfast-------------------------------- //

  const addProduct = async (id) => {
    console.log(id);
    // Acceder a la data del producto seleccionado
    const breakfastRef = doc(db, "Desayunos", id);
    // Traer la data
    const docSnap = await getDoc(breakfastRef);

    const docData = docSnap.data();

    const dataObj = {
      id: id,
      name: docData.name,
      price: docData.price,
      count: 0
    };
    setDataBreakfast([...dataBreakfast, dataObj]);
  };

  // ------------------------Burger-------------------------------- //
  const [dataBurger, setDataBurger] = useState([]);
  const AddBurger = async (id) => {
    const DataBurger = doc(db, "Burger", id);
    console.log(DataBurger);
    const GetBurger = await getDoc(DataBurger);
    const DocDataId = GetBurger.data();
    const dataObj = {
      id: id,
      name: DocDataId.name,
      price1: DocDataId.price1,
      price2: DocDataId.price2,
      extra1: DocDataId.extra1,
      extra2: DocDataId.extra2,
      count: 0 

    };
    setDataBurger([...dataBurger, dataObj]);
    console.log(dataBurger);
  };
  // ------------------------Lunch-------------------------------- //
  const [dataLunch, setDataLunch] = useState([]);
    const AddLunch = async (id) => {
    const DataLunch = doc(db, "lunch", id);
    const GetLunch = await getDoc(DataLunch);
    const DocDataIdLunch = GetLunch.data();
    const dataObj = {
      id: id,
      name: DocDataIdLunch.name,
      price: DocDataIdLunch.price,
    };
    setDataLunch([...dataLunch, dataObj]);
  };


  return (
    <>
      {/* SECCION HEADER */}
      <Header />

      <main className="products-section">
        {/* BOTONES */}
        <section className="menu-section">
          <div className="menu-buttons-container">
            <button
              type="button"
              className="btn-breakfast"
              onClick={BreakfastBtn}
            >
              DESAYUNO
            </button>
            <button type="button" className="btn-lunch" onClick={LunchBtn}>
              ALMUERZO
            </button>
          </div>
        </section>

        {/* SECCION DE DESAYUNO */}
        <section
          className="menu-section-breakfast"
          style={{ display: isVisibleBf ? "block" : "none" }}
        >
          <Breakfast addProduct={addProduct} />
        </section>

        {/* ALMUERZO */}
        <section
          className="lunch-section-breakfast"
          style={{ display: isVisibleLunch ? "block" : "none" }}
        >
          <ProductsBurger AddBurger={AddBurger} />
          <ProductsLunch AddLunch={AddLunch} />
        </section>

        {/* TABLA DE DETALLES DE LA ORDEN */}
        <section className="purchase-orders-section">
          <PurchaseOrder
            dataBreakfast={dataBreakfast}
            dataBurger={dataBurger}
            dataLunch={dataLunch}
            // tableselect = {tableselect}
          />
        </section>
      </main>
    </>
  );
}
