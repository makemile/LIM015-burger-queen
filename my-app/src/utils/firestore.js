// import { initializeApp } from 'firebase/app';
import { getDocs, collection } from 'firebase/firestore'; // Importar Firestore
// import 'firebase/firestore';
// import { collection, getDocs, addDoc, serverTimestamp, query, where } from "firebase/firestore";

// Inicializar firebase
// const app = initializeApp(firebaseConfig);
// // Inicializa Cloud Firestore
// const db = getFirestore(app);

const querySnapshot = (db, col) => getDocs(collection(db, col));
console.log(querySnapshot);
