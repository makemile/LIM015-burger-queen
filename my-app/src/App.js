import React from 'react';
import './App.css';
import Home from './components/Home';
import './components/header.css';
import Tables from './components/Tables';
import './App.css';
import { Router, Route, browserHistory } from 'react-router';

function App() {
  return (
    <div className="app">
        {/* <Home />
        <Header /> */}
      {/* <Tables /> */}
      <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/tables" component={Tables}></Route>
      </Router>
    </div>
  );
}

export default App;
