import React from 'react';
// import firebaseConfig from '../src/utils/firebaseConfig'
import './App.css';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import Tables from './components/Tables';
import orders from './components/ordenes';
import Cocina from './components/Cocina';
import PedidosPorEntregar from './components/Pedidos_Por_Entregar';
import PageNotFound from './components/PageNotFound';




function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/tables"component={Tables} />
          <Route exact path="/order"component={orders} />
          <Route exact path="/kitchen" component={Cocina} />
          <Route exact path="/orders" component={PedidosPorEntregar} />
          <Redirect to="/home" /> 
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
