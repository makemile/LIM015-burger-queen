import React from "react";

export function PurchaseOrder(props) {
  console.log(props.productsSelected)
     // ------------------ FUNCIÓN PARA ELIMINAR PRODUCTO ---------------- //
    //  const deleteProduct = (index) => {
    //      props.productsSelected.map((product, i) => {
    //        if(product.id === index) { 
    //          if(product.count === 1) {
    //            const deleteId = props.productsSelected.filter((product) => product.id !== index)
    //            props.productsSelected(deleteId)
    //             console.log(deleteId)
    //          } else {
    //            product.count = product.count - 1;
    //          }
    //        }
    //      })
    //  }
    
  
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
          {props.productsSelected.map((product) => (
            <tr key={product.id}>
              <td className="table__cantidad">
                 <div> <button onClick = {() => props.addProduct(product.id)}>+</button></div> 
                 <div>
                  {/* {state.count}  */}
                  {product.count} 
                 </div> 
                 <div> <button onClick = {() => props.reduceProducts(product.id)}>-</button></div> 
              </td>
              <td className="table__products">
                <p>{product.name}</p>
              </td>
              <td className="table__price">
                <p>${product.price}</p>
                {/* <button onClick = {() => deleteProduct(product.id)}>borrar</button> */}
                <button>borrar</button>
              </td>
            </tr>   
          ))}
        </tbody>

        <div className="row max-4">
          <div className="col">
            <h3 className="item-card-total">Total: ${props.productsSelected.reduce((sum, product) => sum + Number(product.price) * Number(product.count),0)}</h3>
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
