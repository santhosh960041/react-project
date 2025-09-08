import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import './PlantDetails.css';

const PlantDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const plant = location.state;

  const [quantity] = useState(1);
  

  if (!plant) {
    return <div>No plant data found.</div>;
  }

  const discount = 0.15;
  const discountedPrice = (plant.price - plant.price * discount).toFixed(0);

  const handleAddToCart = () => {
    const item = {
      ...plant,
      quantity,
      finalPrice: discountedPrice,
    };
    addToCart(item);
    alert("✅ Added to cart!");
  };

  return (
    <div className="plant-details-wrapper">
      <div className="plant-image-container">
       <img
  src={plant.image}
  alt={plant.name}
  className="plant-image"
/>
        
        <p className="note">
          📌 Image for reference only. Product may vary. Replaceable, not returnable.
        </p>
      </div>

      <div className="plant-info-container">
        <h2>{plant.name}, <i>Spathiphyllum</i> - Plant</h2>

        <p>🌟 846 reviews</p>
        <p>⚡ 2568+ Sold in last 30 days</p>

        <p>
          <strong>Save 15%</strong> &nbsp;
          <span className="original-price">₹{plant.price}</span> &nbsp;
          <span className="discounted-price">₹{discountedPrice}</span>
        </p>

        <p>🚚 Shipping ₹79 for entire order</p>
        <p>📦 Dispatch in 7 days</p>
        <p>🇮🇳 Country of origin: India</p>

        <div className="gift-box">
          <p><strong>🎁 Free Surprise Garden Gift</strong> (Upto ₹250)</p>
          <p className="free-text">Free ₹250</p>
        </div>

        

      
        <button className="add-to-cart" onClick={handleAddToCart}>
          🛒 Add to cart
        </button>

       

        <button className="back-button" onClick={() => navigate(-1)}>⬅️ Back</button>
      </div>
    </div>
  );
};

export default PlantDetails;
