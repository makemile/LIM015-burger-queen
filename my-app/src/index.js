import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

  
  ReactDOM.render(

  <Suspense fallback={<p>Cargando...</p>}>
    <App />
  </Suspense>,
  document.getElementById('root'),
)

reportWebVitals();
