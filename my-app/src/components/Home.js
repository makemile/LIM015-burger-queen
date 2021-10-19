import React from 'react';
import "./home.css";
import logoHome from "../assets/burger-queen.png";

const Home = () => {
  return (
    <div className="home__containt">
      <figure>
        <img src={logoHome} alt="logoHome" />
      </figure>
      
      <div className="button__options">
         <button className="btn-table">MESAS</button>
        <button className="btn-chef">COCINA</button>
      </div>
    </div>
  );
};

export default Home;
