import React from 'react';
// import firebaseConfig from '../src/utils/firebaseConfig'
import './App.css';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import { Products, Tables } from './components/Orders';
import Cocina from './components/Cocina';
import PedidosPorEntregar from './components/Pedidos_Por_Entregar';
import PageNotFound from './components/PageNotFound';
// import { PurchaseOrder } from './components/PurchaseOrder';
// import {ProductsLunch, ProductsBurger} from './components/Lunch';


function App() {

  return (
    <>
    <div className="app">
      <BrowserRouter>
        <Switch>
        <Route exact path="/order/" component={Tables}>
          <Tables/>
        </Route>

        <Route exact path="/order/:id" component={Tables}>
          <Products/>
        </Route>

        <Route exact path="/home" component={Home} /> 
          {/* <Route path="/tables"component={Tables}/> */}
        <Route exact path="/order/" component={Products}>
          <Tables/>
          <Products/>
        </Route>
        
         <Route exact path="/order/:id">
          <Header/>
          <Products />
        </Route>

        <Route exact path="/kitchen" component={Cocina} />
        <Route exact path="/orders" component={PedidosPorEntregar} />
        <Redirect to="/home" /> 
        <Route component={PageNotFound} />          
        </Switch>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
