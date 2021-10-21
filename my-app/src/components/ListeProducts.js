import React from 'react';
import Header from './Header';
import './products.css';
import { useFirestore, useFirestoreCollection} from 'reactfire';
import { orderBy, query, collection } from '@firebase/firestore';


function Products() {
  const firestore = useFirestore();
  const breakfastCollection= collection(firestore, 'Desayuno');
  const breakfastQuery = query(breakfastCollection, orderBy('precio', 'asc'));
  
  const { status, data: Desayuno } = useFirestoreCollection(breakfastQuery,{
    idField: 'id',
    })

    if (status === 'loading'){
      return <span>loading...</span>
    }
  return (
    
    <> 
      <Header />
      <ul>
        {Desayuno.map((breakfast) =>(
          <li key = {breakfast.id}>{breakfast.name}</li>
        ))}
      </ul>
    </>
  );
}
export default Products;
