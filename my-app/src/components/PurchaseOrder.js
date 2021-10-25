import React from 'react';

export const PurchaseOrder = () => {
    return (
        <table className="table">
        <thead>
         <tr>
            <th scope="col">DETALLE DE LA ORDEN</th>
          </tr>
         <tr>
            <th scope="col">MESA</th>
            <th scope="col">
                CLIENTE
                <input type="text"></input>
            </th>
          </tr>
          <tr>
            <th scope="col">CANTIDAD</th>
            <th scope="col">PRODUCTO</th>
            <th scope="col">PRECIO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
                 <input type="number" min=""></input>
            </th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    )
}

