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
      <section>
        <grid className="tables-container">
      {data.length ? (
        data.map((Table, index) => (
              <button key={index} type="button" className="table-button">{Table.name}</button>
        ))
      ) : (<p>hola</p>)}
        </grid>
      </section>
    </>
  );
};

export default Tables;
