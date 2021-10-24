import React from "react";
import { useEffect, useState } from "react";
import "./tables.css";
import Header from "./Header";
import { db } from "../utils/firebaseConfig";
import LinkButton from "./ButtonLink";




const Tables = () => {
  const [data, setData] = useState([]);
  // const [status, setData] = useState([]);
  useEffect(() => {

    db.collection('Table')
    .orderBy('name', 'asc')
    .get()
    .then((querySnapshot)=>{
      const Table = [];
      querySnapshot.forEach(doc =>{
        let id = doc.id;
        let name = doc.data().name;
        let status = doc.data().status;
        let obj = {id, name, status};
        Table.push(obj);
        console.log(obj);
    })
    setData([...Table]);
    })
  }, []);


  const ClickOrders = (e) => {
    if(db.collection('Table').doc().update({status:false})){
      console.log(e)
    }


   };

  return (
    <>
      <Header />
      
         {data.map((Table) => (
        
          <section key = {Table.name}>
            <div className="tables-container">
             {console.log(Table.id,41)}

                < LinkButton to = {`/order/${Table.id}`}
                  type="button"
                  className="table-button"
                  onClick={(e) => { 
                  ClickOrders(e)
                  }}
                >
                  {Table.name}
                </LinkButton>
            </div>
          </section>
))
      }) 
    </>
)
}

export default Tables;