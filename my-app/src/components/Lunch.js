import React from 'react';
import {useEffect, useState} from 'react';
import { db } from "../utils/firebaseConfig";



export const ProductsBurger = () => {

  const [data, setDate] = useState([]);

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
      setDate ([...Burger]);
    })
  }, [])

   const addProducts = (e) => {
    
       e.preventDefault();
       console.log(e)
     }

  //select type burger//
const [types,setTypes]=useState('Pollo');

function TypeBurger(e) {
    setTypes(e.target.value)
    
  }
  
  return(
  
  <>
  <main className = "burger-grid">
  {data.map((ProductsBurger) => (
        <div className = "container-burger" key = {ProductsBurger.id}>
          <div className = "content-burger">
            <div className = "visual-burger">
              <figure className = "burger-figure">
                <img  className = "burger-img" src = {ProductsBurger.img} alt = {ProductsBurger.name}/>
                <span className = "burger-price"><strong> s/{ProductsBurger.price2}</strong>
                </span>
              </figure>
            </div>

            {/*select de type burger */}
          <div class="select-opt">
            <p><select value={types} onChange={TypeBurger}>
              <option >{ProductsBurger.type1}</option>
              <option >{ProductsBurger.type2}</option>
              <option >{ProductsBurger.type3}</option>
            </select></p>
          </div>

          {/*extras... s/1 */}
          <div className="additions">
            <p><strong>Agregados S/.1</strong></p>

            <input type="radio" id="queso" name="type" value="queso" />
            <label htmlFor="queso">{ProductsBurger.extra2}</label>

            <input type="radio" id="huevo" name="type" value="huevo" />
            <label htmlFor="huevo">{ProductsBurger.extra1}</label>
          </div>

          <button type="button" className = "btn-lunch" onClick = {(e) => {
                  addProducts(e)
                }}> AGREGAR</button>
          </div>
        </div>
      ))}
  </main>
    </>
  )
  }


  const addProductsLunch = (e) =>{
console.log(e)
  }

  export const ProductsLunch = () =>{

    const [data, setData] = useState([]);
  
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
        setData([...Lunch])
      })

    }, [])


    return(
      <>
      <main className="lunch-grid">
          {data.map((ProductsLunch, index) => (
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
                <button type="button" className = "btn-lunch" onClick = {(e) => {
                  addProductsLunch(e)
                }}>AGREGAR</button>
              </div>
            </div>
          ))}
          </main>
          </>
      
        )        
  }
