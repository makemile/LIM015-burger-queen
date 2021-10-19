import './header.css';
import logoHeader from '../assets/logoHeader.png';

const Header = () => {
    return (
    <header>
        <img className="logoheader" src ={logoHeader} alt="logo"/>
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
}

export default Header;