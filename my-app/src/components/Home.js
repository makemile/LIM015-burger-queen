import './home.css';
import logo from '../images/burger-queen.png'

const Home = () => {
    return (
        <div className = "home__containt">
          <div> <img src={logo} alt="logo" /></div>
            <div className = "button__options">
                <button className = "btn-table">MESAS</button>
                <button className = "btn-chef">COCINA</button>
            </div>
        </div>

    )
}

export default Home;