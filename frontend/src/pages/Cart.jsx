import { useState } from 'react';
import './Cart.css';
import { pizzaCart } from '../../data/pizzas';


const Cart = () => {
  const [items, setItems] = useState(pizzaCart.map((item) => ({ ...item, contador: 1 })));

  const handleSumar = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? { ...item, contador: item.contador + 1 } : item))
    );
  };

  const handleRestar = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? { ...item, contador: item.contador - 1 } : item))
    );
  };

  const calculadoraTotal = (cart) => {
    return cart.reduce((total, producto) => {
      return total + producto.price * producto.contador;
    }, 0);
  };

  const total = calculadoraTotal(items);
   
  
  return (
    <div className="containerCart">
      <h2>Pedido:</h2>
      <table>
        <thead>
          <tr>
            <th className='picture'></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {items
            .filter((item) => item.contador > 0)
            .map((item, index) => (
              <tr key={index}>
                <img src={item.img} alt="imagen pizza" />
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => handleRestar(index)}>-</button>
                  <span>{item.contador}</span>
                  <button onClick={() => handleSumar(index)}>+</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="totalCart">
        Total: {total}
      </div>
      <button 
       
        >       
        Pagar
    </button>
    </div>
  );
};

export default Cart;