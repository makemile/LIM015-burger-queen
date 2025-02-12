import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import logoHome from '../assets/burger-queen.png';

const Home = () => (
  <div className="home__containt">
    <figure>
      <img src={logoHome} alt="logoHome" />
    </figure>

    <div className="button__options">
      {/* <Link to="/tables">
        <button type="button" className="btn-table">MESERO</button>
      </Link> */}
      <Link to="/order">
      <button type="button" className="btn-orden">MESERO</button>
       </Link>
      <Link to="/kitchen">
        <button type="button" className="btn-chef">CHEF</button>
      </Link>
    </div>
  </div>
);

export default Home;
