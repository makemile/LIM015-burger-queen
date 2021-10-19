import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebaseConfig from './utils/firebaseConfig';
import {FirebaseAppProvider} from 'reactfire';
import { Suspense } from 'react';



ReactDOM.render(
  (
    <FirebaseAppProvider firebaseConfig={ firebaseConfig }>
        <Suspense fallback={<p>Cargando...</p>}>
            <App/>
        </Suspense>
    </FirebaseAppProvider>
),
  document.getElementById('root')
);

reportWebVitals();
