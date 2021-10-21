import React from 'react';
import './App.css';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import Tables from './components/Tables';
import Cocina from './components/Cocina';
import PedidosPorEntregar from './components/Pedidos_Por_Entregar';
import Products from './components/Products';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/kitchen" component={Cocina} />
          <Route exact path="/orders" component={PedidosPorEntregar} />
          <Route exact path="/products" component={Products} />
          <Route component={PageNotFound} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
