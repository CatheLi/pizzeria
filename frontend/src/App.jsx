import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./component/Navbar";
import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pizza from "./pages/Pizza";
import Footer from "./component/Footer";
import Cart from "./pages/Cart";
import NotFound from "./component/NotFound";
import Profile from "./component/Profile";
import CartProvider  from "./store/CartContext.jsx";
import HomeProvider  from "./store/HomeContext.jsx";
import UserProvider from './store/UserContext';
import ProtectedRoute from './component/ProtectedRoute';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <HomeProvider>
            <UserProvider>
                <Navbar/> 
                  <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/register' element={<Register />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/cart' element={<Cart />}/>
                    <Route path='/pizza/:pizzaId' element={<Pizza />}/>
                    <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
                    <Route path='*' element={<NotFound />}/>
                  </Routes>
                <Footer />
              </UserProvider> 
          </HomeProvider>
        </CartProvider>       
      </BrowserRouter>
    </>
  );
};


export default App;