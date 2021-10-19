import './header.css';
import logo from '../assets/burgerqueen1.png';

const Header = () => (
  <header>
    <img className="logo" src= {logo} alt="logo" />
    <nav>
      <ul>
        <li><a href="/" className="home">HOME</a></li>
        <li><a href="/" className="table">MESAS</a></li>
        <li><a href="/" className="kitchen">COCINA</a></li>
        <li><a href="/" className="orders">PEDIDOS POR ENTREGAR</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
