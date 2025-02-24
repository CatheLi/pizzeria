import './Navbar.css';
// import Cart from './Cart'

const Navbar = ({ activeTab, setActiveTab }) => {
    const total = 25000;
    const token = false;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                                href="#"
                                onClick={() => setActiveTab('home')}
                            >🍕Home</a>

                        </li>
                        {token ? (
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">🔓Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">🔒Logout</a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                                        href="#"
                                        onClick={() => setActiveTab('login')}
                                    >
                                        🔐Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                                        href="#"
                                        onClick={() => setActiveTab('register')}
                                    >
                                        🔐Register
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeTab === 'pizza' ? 'active' : ''}`}
                                        href="#"
                                        onClick={() => setActiveTab('pizza')}
                                    >
                                        Pizza
                                    </a>
                                </li>
                            </>
                        )}

                        <li className="nav-item ms-auto">
                            <a
                                className={`nav-link active ${activeTab === 'cart' ? 'active' : ''}`}
                                id='carrito'
                                href="#"
                                onClick={() => setActiveTab('cart')}
                            >🛒Total:${total.toLocaleString()}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;