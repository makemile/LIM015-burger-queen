import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logoHeader from '../assets/logoHeader.png';

const Header = () => (
  <header>
    <img className="logoheader" src={logoHeader} alt="logo" />
    <nav>
      <ul>
        <li>
          <Link to="/home">HOME</Link>
          {/* <a href="/" className="home">HOME</a> */}
        </li>
        <li>
          <Link to="/tables">MESAS</Link>
          {/* <a href="/" className="table">MESAS</a> */}
        </li>

        <li>
          <Link to="/kitchen">COCINA</Link>
          {/* <a href="/" className="kitchen">COCINA</a> */}
        </li>
        <li>
          <Link to="/orders">PEDIDOS POR ENTREGAR</Link>
          {/* <a href="/" className="orders">PEDIDOS POR ENTREGAR</a> */}
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
