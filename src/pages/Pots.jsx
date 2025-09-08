import React, { useState } from "react";
import { useCart } from "../CartContext";
import { useWishlist } from "../WishlistContext";
import "./Pots.css";

const mudPots = [
  { id: 1, name: "Terracotta Pot", price: 100, image: "https://via.placeholder.com/150?text=Terracotta+Pot" },
  { id: 2, name: "Clay Pot", price: 80, image: "https://via.placeholder.com/150?text=Clay+Pot" },
  { id: 3, name: "Earthen Pot", price: 90, image: "https://via.placeholder.com/150?text=Earthen+Pot" },
];

const plasticPots = [
  { id: 4, name: "Plastic Pot - Small", price: 40, image: "https://via.placeholder.com/150?text=Plastic+Pot+Small" },
  { id: 5, name: "Plastic Pot - Medium", price: 60, image: "https://via.placeholder.com/150?text=Plastic+Pot+Medium" },
  { id: 6, name: "Plastic Pot - Large", price: 75, image: "https://via.placeholder.com/150?text=Plastic+Pot+Large" },
];

const Pots = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [selectedType, setSelectedType] = useState("mud");

  const handleChange = (e) => {
    setSelectedType(e.target.value);
  };

  const currentItems = selectedType === "mud" ? mudPots : plasticPots;

  return (
    <div className="pots-container">
      <h2 className="page-title">🪴 Pots Collection</h2>

      

      <div className="pot-column">
        {currentItems.map((item) => (
          <div key={item.id} className="pot-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button onClick={() => addToWishlist(item)}>❤️ Wishlist</button>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pots;
