import React from "react";
import "./Muds.css";
import { useCart } from "../CartContext";
import { useWishlist } from "../WishlistContext";
import { useNavigate } from "react-router-dom";

const mudPots = [
  {
    id: 1,
    name: "GOLD DUST Orchid Pots, Terracotta Planters - 6 inch, Clay (Pack of 1)",
    price: 99,
    image: "https://m.media-amazon.com/images/I/81H7aexM3eL._SX679_.jpg",
    description: "Traditional clay pot, perfect for indoor plants."
  },
  {
    id: 2,
    name: "GOLD DUST Terracotta Pots, Mud Pot for Plants, Earthen Pots for Plants,(Pack of 2)",
    price: 120,
    image: "https://m.media-amazon.com/images/I/61gC2Un0+XL._SX679_.jpg",
    description: "Eco-friendly handcrafted clay planter."
  },
  {
    id: 3,
    name: "GOLD DUST Clay Terracotta Pots for Plants, Gamla, Gamley, Mud, Earthen, Mitti (Pack of 1)",
    price: 149,
    image: "https://m.media-amazon.com/images/I/71VSHNJy0zL._SX679_.jpg",
    description: "Textured finish adds earthy charm."
  },
  {
    id: 4,
    name: "GOLD DUST Terracotta Pots - Gamla & Mitti Earthen Pots (Pack of 1)",
    price: 179,
    image: "https://m.media-amazon.com/images/I/71ZAV1m9XBL._SL1500_.jpg",
    description: "Ideal for herbs and flowering plants."
  },
  {
    id: 5,
    name: "GOLD DUST Earthen Terracotta Clay Pots for Plants, Gamla, Gamley, Mud Pot, Mitti Pots (Pack of 1)",
    price: 199,
    image: "https://m.media-amazon.com/images/I/71EozS4UTzL._SX679_.jpg",
    description: "Hand-painted mud pot with floral patterns."
  },
  {
    id: 6,
    name: "GOLD DUST Terracotta Clay Pot for Plants - Gamla, Gamley, Mud, Earthen, Mitti (Pack of 1)",
    price: 139,
    image: "https://m.media-amazon.com/images/I/71vTcQXua3L._SX679_.jpg",
    description: "Traditional style inspired by village pottery."
  },
  {
    id: 7,
    name: "GOLD DUST Terracotta Pots for Plants,Mud Pot for Plants, Earthen Pots for Plants, Mitti Pots for Plants (Pack of 1)",
    price: 169,
    image: "https://m.media-amazon.com/images/I/71vCzCFH19L._SX679_.jpg",
    description: "Stylish red motif on natural mud base."
  },
  {
    id: 8,
    name: "GOLD DUST Clay Terracotta Pots for Plants, Gamla, Gamley, Mud Earthen Mitti Pot (Pack of 1)",
    price: 89,
    image: "https://m.media-amazon.com/images/I/7100Hx84YLL._SL1500_.jpg",
    description: "Minimalist unglazed oval mud pot."
  },
];

const Muds = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleCardClick = (plant) => {
    navigate(`/plant/${plant.id}`, { state: plant });
  };

  return (
    <div className="muds-container">
      <h2 className="page-title"> Mud Pots Collection</h2>
      <div className="muds-grid">
        {mudPots.map((item) => (
          <div
            key={item.id}
            className="mud-card"
            onClick={() => handleCardClick(item)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">₹{item.price}</p>
            <div className="card-buttons">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToWishlist(item);
                }}
              >
                ❤️ Wishlist
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(item);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Muds;
