// import { initializeApp } from 'firebase/app';
import { getDocs, collection } from 'firebase/firestore'; // Importar Firestore

const querySnapshot = (db, collectionData) => getDocs(collection(db, collectionData));

export default querySnapshot;
// import { collection, getDocs } from "firebase/firestore";

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
