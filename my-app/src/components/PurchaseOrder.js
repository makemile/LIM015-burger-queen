import React from "react";

export function PurchaseOrder(props) {
  return (
    <>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">DETALLE DE LA ORDEN</th>
          </tr>
          <tr>
            <th scope="col">MESA</th>

            <th scope="col">
              CLIENTE<input type="text"></input>
            </th>
          </tr>
          <tr>
            <th scope="col">CANTIDAD</th>
            <th scope="col">PRODUCTO</th>
            <th scope="col">PRECIO</th>
          </tr>
        </thead>
        <tbody>
          {props.dataBreakfast.map((breakfast) => (
            <tr key={breakfast.id}>
              <td className="table__cantidad">
                <input type="number" min="0">
                  {breakfast.num}
                </input>
              </td>
              <td className="table__products">
                <p>{breakfast.name}</p>
              </td>
              <td className="table__price">
                <p>${breakfast.price}</p>
              </td>

              {/* <td className = "table__delete"><img className = "table__delete" src={delete} alt="delete" /></td> */}
            </tr>
          ))}
        </tbody>

        <tbody>
          {props.dataBurger.map((lunch) => (
            <tr key={lunch.id}>
              <td className="table__cantidad">
                <input type="number" min="0">
                  {lunch.num}
                </input>
              </td>
              <td className="table__products">
                <p>{lunch.name}</p>
                <p>{lunch.extra1}</p>
                <p>{lunch.extra2}</p>
              </td>
              <td className="table__price">
                <p>${lunch.price2}</p>
                <p>${lunch.price1}</p>
              </td>

              {/* <td className = "table__delete"><img className = "table__delete" src={delete} alt="delete" /></td> */}
            </tr>
          ))}
        </tbody>

        <tbody>
          {props.dataLunch.map((lunch) => (
            <tr key={lunch.id}>
              <td className="table__cantidad">
                <input type="number" min="0">
                  {lunch.num}
                </input>
              </td>
              <td className="table__products">
                <p>{lunch.name}</p>
              </td>
              <td className="table__price">
                <p>${lunch.price}</p>
              </td>

              {/* <td className = "table__delete"><img className = "table__delete" src={delete} alt="delete" /></td> */}
            </tr>
          ))}
        </tbody>

        <div className="row max-4">
          <div className="col">
            <h3 className="item-card-total">Total $0</h3>
          </div>
          <div className="row max-4">
            <div className="col d-flex justify content-end">
              <button type="button" className="confirmer-order">
                confirmar
              </button>
              <button type="button" className="reject-order">
                anular
              </button>
            </div>
          </div>
        </div>
      </table>
    </>
  );
}
