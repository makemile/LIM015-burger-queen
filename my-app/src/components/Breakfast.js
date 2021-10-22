import React from 'react';
// import { useFirebaseApp, useFirestoreCollection } from 'reactfire';

function Breakfast() {
  return (
    <section className="menu-section-breakfast">
      {/* <!-- card 1 --> */}
      <div className="container-breakfast">
        <div className="content-breakfast">
          <div className="visual-breakfast">
            <figure className="breakfast-figure">
              <img src="https://i.postimg.cc/XJhnmfyk/burgerking-cafe.png" alt="" />
              <span className="breakfast-price"><strong>S/. 5.00</strong></span>
            </figure>
          </div>
          <div className="breakfast-details">
            <h3>Café Americano</h3>
          </div>
          <button type="button">AGREGAR</button>
        </div>
      </div>

      {/* <!-- card 2 --> */}
      <div className="container-breakfast">
        <div className="content-breakfast">
          <div className="visual-breakfast">
            <figure className="breakfast-figure">
              <img src="https://i.postimg.cc/XJhnmfyk/burgerking-cafe.png" alt="" />
              <span className="breakfast-price"><strong>S/. 5.00</strong></span>
            </figure>
          </div>
          <div className="breakfast-details">
            <h3>Café Americano</h3>
          </div>
          <button type="button">AGREGAR</button>
        </div>
      </div>

      {/* <!-- card 3 --> */}
      <div className="container-breakfast">
        <div className="content-breakfast">
          <div className="visual-breakfast">
            <figure className="breakfast-figure">
              <img src="https://i.postimg.cc/XJhnmfyk/burgerking-cafe.png" alt="" />
              <span className="breakfast-price"><strong>S/. 5.00</strong></span>
            </figure>
          </div>
          <div className="breakfast-details">
            <h3>Café Americano</h3>
          </div>
          <button type="button">AGREGAR</button>
        </div>
      </div>

      {/* <!-- card 4 --> */}
      <div className="container-breakfast">
        <div className="content-breakfast">
          <div className="visual-breakfast">
            <figure className="breakfast-figure">
              <img src="https://i.postimg.cc/XJhnmfyk/burgerking-cafe.png" alt="" />
              <span className="breakfast-price"><strong>S/. 5.00</strong></span>
            </figure>
          </div>
          <div className="breakfast-details">
            <h3>Café Americano</h3>
          </div>
          <button type="button">AGREGAR</button>
        </div>
      </div>
    </section>

  );
}
export default Breakfast;
