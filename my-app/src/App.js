import React from 'react';
import './App.css';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Tables from './components/Tables';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/tables" component={Header} />
          <Route path="/tables" component={Tables} />
          <Redirect path="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
