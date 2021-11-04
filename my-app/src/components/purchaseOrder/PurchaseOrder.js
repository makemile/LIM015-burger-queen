import React, {useState} from "react";
import './purchaseOrder.css';
import {db} from '../../utils/firebaseConfig'






export function PurchaseOrder(props) {
   console.log(props, 4)
  

  const [name, setName] = useState('');
  
  function nameCliente (e) {
   const name = e.target.value
   setName(name);
  }

  //({
  
    // const newCollectionObjOrder = {
    //   name: name,
    //   order: props.productsSelected,
    //   total: props.productsSelected.reduce((sum, product) => sum + Number(product.price) * Number(product.count),0)
    // } 

    // if(newCollectionObjOrder.total !== 0){
    //   db.collection('order').add(newCollectionObjOrder)
    // }


    function confirmarpedido(){
      const newCollectionObjOrder = {
        // table: props.tableselect,
        name: name,
        order: props.productsSelected,
        total: props.productsSelected.reduce((sum, product) => sum + Number(product.price) * Number(product.count),0)
      } 
      if(newCollectionObjOrder.total !== 0){
        db.collection('order').add(newCollectionObjOrder)
      }
    }
      
  // }).then((docRef) => {
  //   console.log("Document written with ID: ", docRef.id)
  // }).catch((err) => {
  //   console.error("Error adding document: ", err);
  // })
  
 
 
    // console.log(newCollectionObjOrder);
    
    const deleteProduct = (id) => {
      const productsFilter = props.productsSelected.filter((product) => product.id !== id);
      props.setProductsSelected(productsFilter);
    }
  

  
  return (
    <>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col" style={{'font-size': '2.0rem'}}>DETALLE DE LA ORDEN</th>
          </tr>
          <tr>
            <th scope="col" style={{'font-size': '1.6rem'}}>MESA</th>

            <th scope="col" style={{'font-size': '1.6rem'}}>
            <label>
            Cliente:
            <input type="text"  onChange= {nameCliente}   />
            </label>
              
            </th>
          </tr>
          <tr>
            <th scope="col" style={{'font-size': '1.6rem'}}>CANTIDAD</th>
            <th scope="col" style={{'font-size': '1.6rem'}}>PRODUCTO</th>
            <th scope="col" style={{'font-size': '1.6rem'}}>PRECIO</th>
          </tr>
        </thead>
        
        <tbody>
          {props.productsSelected.map((product) => (
            <> 
            <tr key={product.id}>
              <td className="table__cantidad">
                 <div> <button onClick = {() => props.addProduct(product.id)}>+</button></div> 
                 <div className ="div-count">
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
                <button onClick = {() => deleteProduct(product.id)}>borrar</button>
              </td>
            </tr>  
            <hr></hr>
            </>
          ))}
        </tbody>

        <div className="row max-4">
          <div className="col">
            <h3 className="item-card-total">Total: ${props.productsSelected.reduce((sum, product) => sum + Number(product.price) * Number(product.count),0)}</h3>
          </div>
          <div className="row max-4">
            <div className="col d-flex justify content-end">
              <button type="button" className="confirmer-order" onClick = {confirmarpedido} >
                confirmar
              </button>
              <button type="button" className="reject-order">
                cancelar
              </button>
            </div>
          </div>
        </div>

      </table>
    </>
  );
}
