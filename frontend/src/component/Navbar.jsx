import {Link} from 'react-router-dom'
import './Navbar.css';
// import Cart from './Cart'

const Navbar = () => {
    const total = 25000;
    const token = false;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <Link
                                className={`nav-link `}
                                to="/"
                                
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
                                        className={`nav-link `}
                                        to="/login"
                                        
                                    >
                                        🔐Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link `}
                                        to="/register"
                                        
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
                                className={`nav-link active `}
                                id='carrito'
                                to="/cart"
                                
                            >🛒Total:${total.toLocaleString()}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;