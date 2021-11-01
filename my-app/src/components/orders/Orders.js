import React from "react";
import Header from '../Header';
import {Menu} from '../menu/Menu'
import { PurchaseOrder } from '../purchaseOrder/PurchaseOrder'

export function Orders() {

    // Función para botones 
    // function showAccordingToType(e) {
    //    const container = document.getElementsByClassName('container-breakfast');

    //     if (e.target.className == 'btn-breakfast') {
    //         const bf = products.filter((product) => product.type == 'desayuno');
    //         console.log(bf)
    //         console.log(container)
    //         container.style.display = 'inline';
        
    //     } else if (e.target.className == 'btn-lunch') {
    //         const lunch = products.filter((product) => product.type == 'almuerzo');
    //          console.log(lunch)
    //          container.style.display = 'inline';
    //     }
    //   }

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
            <Menu/>
        </section>

        {/* TABLA DE DETALLES DE LA ORDEN */}
        <section className="purchase-orders-section">
            <PurchaseOrder />
        </section>
      </main>
    </>
  );
}