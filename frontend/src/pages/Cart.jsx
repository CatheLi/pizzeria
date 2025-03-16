import { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../store/CartContext';
import { UserContext } from '../store/UserContext';

const Cart = () => {
  const { items, handleSumar, handleRestar, total } = useContext(CartContext);
  const {  token } = useContext(UserContext)

  return (
    <div className="containerCart">
      <h2>Detalles del pedido:</h2>
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
          {items && items
            .filter((item) => item.contador > 0)
            .map((item, index) => (
              <tr key={item.id}> 
                <td><img src={item.img} alt="imagen pizza" /></td>
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
        Total: ${total}
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick=''
        disabled={!token}
      >
        Pagar
      </button>
    </div>
  );
};

export default Cart;