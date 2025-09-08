// src/pages/Cart.jsx
import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import "./Cart.css"; // 💡 Make sure this is correctly imported

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (couponCode === "PLANT10") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - subtotal * discount;

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <div className="qty-control">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Coupon section */}
          <div className="cart-coupon">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button onClick={applyCoupon}>Apply</button>
          </div>

          {/* Total */}
          <div className="cart-total">
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            {discount > 0 && (
              <p className="discount-applied">Discount Applied: -₹{(subtotal * discount).toFixed(2)}</p>
            )}
            <h3>Total: ₹{total.toFixed(2)}</h3>
          </div>

          {/* Action buttons */}
          <div className="cart-actions">
            <Link to="/" className="continue-shopping">← Continue Shopping</Link>
            <button className="proceed-payment">Proceed to Payment</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
