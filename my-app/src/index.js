import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Store } from './components/PurchaseOrder';

// import firebaseConfig from './utils/firebaseConfig';

const renderApp = () => {
  
  ReactDOM.render(

  <Suspense fallback={<p>Cargando...</p>}>
    <App />
  </Suspense>,
  document.getElementById('root'),
)
}

renderApp()
Store.subscribe(renderApp)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
