import {Link} from 'react-router-dom'
import './Navbar.css';
// import Cart from './Cart'

const Navbar = ({ activeTab, setActiveTab }) => {
    const total = 25000;
    const token = false;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" href="#">Pizzería Mamma Mia!</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                                to="/home"
                                onClick={() => setActiveTab('home')}
                            >🍕Home</Link>

                        </li>
                        {token ? (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">🔒Logout</a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                                        to="/login"
                                        onClick={() => setActiveTab('login')}
                                    >
                                        🔐Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                                        to="/register"
                                        onClick={() => setActiveTab('register')}
                                    >
                                        🔐Register
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">🔓Profile</Link>
                                </li>

                            </>
                        )}

                        <li className="nav-item ms-auto">
                            <Link
                                className={`nav-link active ${activeTab === 'cart' ? 'active' : ''}`}
                                id='carrito'
                                to="/cart"
                                onClick={() => setActiveTab('cart')}
                            >🛒Total:${total.toLocaleString()}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;