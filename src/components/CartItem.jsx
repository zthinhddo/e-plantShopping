import { useSelector, useDispatch } from 'react-redux';
import '../styles/CartItem.css';
import { removeItem, incrementQuantity, decrementQuantity } from '../stores/CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  console.log('cart: ', cart);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {

  };
  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };



  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    console.log('parseFloat(parseInt(item.cost) & item.quantity): ', parseFloat(parseInt(item.cost) & item.quantity));
    return parseFloat(parseInt(item.cost) * item.quantity);
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


