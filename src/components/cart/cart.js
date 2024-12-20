import React from 'react';
import { useCart } from '../cartcontext/cartcontext';
import './cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="cart">
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-info">
                  <h3>{item.name}</h3>
                </div>
              </div>
              <div className="quantity-controls">
                <button 
                  onClick={() => updateQuantity(item.name, item.quantity - 1)} 
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.name, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <p className="item-price">₹{item.price}</p>
              <button onClick={() => removeFromCart(item.name)} className="remove-button">Remove</button>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <h3>Summary :</h3>
        <p>Subtotal ({cartItems.length} item{cartItems.length > 1 ? 's' : ''}) - ₹{totalPrice.toFixed(2)}</p>
        <p>Inclusive of taxes</p>
        <p>(Applicable discounts and charges will be calculated on checkout screen)</p>
        <button className="checkout-button">Check Out</button>
      </div>
    </div>
  );
}

export default Cart;
