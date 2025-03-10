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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <HomeProvider>
            <Navbar/> 
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/pizza/:pizzaId' element={<Pizza />}></Route>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
            <Footer />
          </HomeProvider>
        </CartProvider>
       
      </BrowserRouter>
    </>
  );
};

export default App;