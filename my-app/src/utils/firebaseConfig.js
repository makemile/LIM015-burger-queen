// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDLbLyvmeWmcgESLcH223waNmMo9fPaPbE',
  authDomain: 'burger-queen-65484.firebaseapp.com',
  projectId: 'burger-queen-65484',
  storageBucket: 'burger-queen-65484.appspot.com',
  messagingSenderId: '841097883738',
  appId: '1:841097883738:web:a4235c3345a1d8c1b82863',
  measurementId: 'G-SB68MB9J1J',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
//  Initialize Firebase
// const firebase = initializeApp(firebaseConfig);
