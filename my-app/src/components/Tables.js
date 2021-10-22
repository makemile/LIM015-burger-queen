import React, { useEffect, useState } from 'react';
// import { collection, onSnapshot } from 'firebase/firestore';
import './tables.css';
import Header from './Header';
import db from '../utils/firebaseConfig';

const Tables = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    db.collection('Table')
      .get()
      .then((querySnapshot) => {
        const Table = [];
        querySnapshot.forEach((doc) => {
          Table.push(doc.data());
        });
        setData([...Table]);
      });
  }, []);

  return (
    <>
      <Header />

      {data.length ? (
        data.map((Table) => (

          <section>
            <grid key={Table.id} className="tables-container">
              <button type="button" className="table-button">{Table.name}</button>
            </grid>
          </section>
        ))
      ) : (<p>hola</p>)}
    </>
  );
};

export default Tables;
