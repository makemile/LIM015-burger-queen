import React from 'react';
import {useEffect, useState} from 'react';
import { db } from "../utils/firebaseConfig";
//  import { PurchaseOrder } from './PurchaseOrder';
// import { collection, onSnapshot } from 'firebase/firestore'; // Importar Firestore
//  import { PurchaseOrder } from './PurchaseOrder';



export const ProductsBurger = () => {

  const [burger, setBurger] = useState([]);
console.log(burger)
  useEffect(() => {
    db.collection('Burger')
    .orderBy('name', 'asc')
    .get()
    .then((querySnapshot) => {
      const Burger = [];
      querySnapshot.forEach(doc => {
        const obj = {
          id: doc.id,
          img: doc.data().img,
          name: doc.data().name,
          price1: doc.data().price1,
          price2: doc.data().price2,
          type1: doc.data().type1,
          type2: doc.data().type2,
          type3: doc.data().type3,
          extra1: doc.data().extra1,
          extra2: doc.data().extra2,
        }
        Burger.push(obj);
      })
      setBurger ([...Burger]);
    })
  }, [])

   const addProducts = (e) => {
    const capture = e
console.log(capture,38)
     }

//button radius//
// const [selectValue, setSelectValue] = useState({
// checked: null
// })
// const handleChange = (e) =>{
// setSelectValue({
//   checked:e.target.value
// })
// }


  //select type burger//
const [types,setTypes]=useState('Pollo');

function TypeBurger(e) {
    setTypes(e.target.value)
    
  }
  
  return(
  
  <>
  <main className="burger-grid">
  {burger.map((ProductsBurger) => (
        <div className="container-burger" key={ProductsBurger.id}>
          <div className="content-burger">
            <div className="visual-burger">
              <figure className="burger-figure">
                <img  className="burger-img" src={ProductsBurger.img} alt = {ProductsBurger.name}/>
                <span className="burger-price"><strong> S/{ProductsBurger.price2}.00</strong>
                </span>
              </figure>
            </div>

          <div className="product-details-burger">
            <h3>{ProductsBurger.name}</h3>
          </div>

            {/*select de type burger */}
          <div className="select-opt">
            <p><select className="select-btn" value={types} onChange={TypeBurger}>
              <option >{ProductsBurger.type1}</option>
              <option >{ProductsBurger.type2}</option>
              <option >{ProductsBurger.type3}</option>
            </select></p>
          </div>

          {/*extras... s/1 */}
          <div className="additions">
            <p><strong>Agregados S/.1</strong></p>
            

            <input type="radio" id="queso" name="type" value="queso"  />
            <label htmlFor="queso">{ProductsBurger.extra2}</label>

            <input type="radio" id="huevo" name="type" value="huevo"   />
            <label htmlFor="huevo">{ProductsBurger.extra1}</label>
            
          </div>

          <button type="button" className = "btn-lunch" onClick = {() => {
                   addProducts(ProductsBurger.id) 
                } }> AGREGAR</button>
                 {/* <>
                 <PurchaseOrder burger={burger}/></> */}
          </div>
        </div>
      ))}
  </main>
    </>
  )
  }


  const addProducts = (e) =>{
const Capture = e;
console.log(Capture);
  }

  export const ProductsLunch = () =>{

    const [lunch, setLunch] = useState([]);
    console.log(lunch)
  
    useEffect(() => {
      db.collection('lunch')
      .orderBy('name', 'asc')
      .get()
      .then((querySnapshot) =>{
        const Lunch = [];
        querySnapshot.forEach((doc) =>{
          const obj = {
            id: doc.id,
            img: doc.data().img,
            name: doc.data().name,
            price: doc.data().price,
          }
          Lunch.push(obj);
        })
        setLunch([...Lunch])
      })

    }, [])


    return(
      <>
      <main className="lunch-grid">
          {lunch.map((ProductsLunch, index) => (
            <div className="container-lunch" key={index}>
              <div className="content-lunch">
                <div className="visual-lunch">
                  <figure className="lunch-figure">
                    <img className="lunch-img" src={ProductsLunch.img} alt={ProductsLunch.name} />
                    <span className="lunch-price"><strong>S/.{ProductsLunch.price}.00</strong></span>
                  </figure>
                </div>
                <div className="lunch-details">
                  <h3>{ProductsLunch.name}</h3>
                </div>
                <button type="button" className = "btn-lunch"  onClick = {() => {
                   addProducts(ProductsLunch.id) 
                } }>AGREGAR</button>
                <>
                
                  {/* <PurchaseOrder lunch={lunch}/>  */}
                
                 </>
              </div>
            </div>
          ))}
          </main>
          </>
      
        )        
  }
