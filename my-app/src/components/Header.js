import './header.css';

const Header = () => {
    return (
    <header>
        <img className="logo" href="../images/burger-queen.png" alt="logo"/>
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