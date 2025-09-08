// src/pages/LowLight.jsx
import React from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../WishlistContext";
import "./LowLight.css"; // Optional styling

const plants = [
  {
    id: 1,
    name: "Krishna Kamal, Passion flower, Passiflora incarnata (Purple) - Plant",
    price: 499,
       reviews: 298,
    image: "https://nurserylive.com/cdn/shop/files/51kTv7dG97L._UF1000_1000_QL80_95ec444a-fe10-4dac-ac9c-620131db2808_869x869.jpg?v=1751755536",
    description: "ZZ Plant thrives in low light and requires little water.",
  },
  {
    id: 2,
    name: "Clitoria Ternatea, Gokarna (Blue) - Plant",
    price: 399,
       reviews: 798,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-clitoria-ternatea-gokarna-blue-plant-697372_600x600.jpg?v=1690529351",
    description: "Snake Plant is an excellent air purifier and needs minimal care.",
  },
  {
    id: 3,
    name: "Sankrant Vel, Flame Vine - Plant",
    price: 299,
       reviews: 898,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-g-sankrant-vel-flame-vine-plant_600x600.jpg?v=1634228001",
    description: "Pothos is easy to grow and perfect for hanging baskets.",
  },
  {
    id: 4,
    name: "Set of 2 Ranjai Plants",
    price: 449,
       reviews: 358,
    image: "https://nurserylive.com/cdn/shop/files/nurserylive-set-of-2-small-ran-jai-plants_600x600.jpg?v=1685711373",
    description: "Peace Lily blooms indoors and loves shady corners.",
  },
  {
    id: 5,
    name: "Mandevilla (Red) - Plant",
    price: 549,
       reviews: 678,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-mandevilla-red-plant-in-5-inch-13-cm-in-grower-round-black-pot-544792_600x600.jpg?v=1679750572",
    description: "As tough as its name, perfect for low-light rooms.",
  },
  {
    id: 6,
    name: "Passiflora Sherry (Red) - Plant",
    price: 499,
       reviews: 248,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-plants-passiflora-sherry-red-plant-16969161080972_600x600.jpg?v=1634225510",
    description: "Philodendrons are beautiful and very low-maintenance.",
  },
];

const LowLight = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { addToWishlist } = useWishlist();

  const handleCardClick = (plant) => {
    navigate(`/plant/${plant.id}`, { state: plant });
  };

  return (
    <div className="lowlight-container">
      <h2>Climber Plants</h2>
      <div className="cards-grid">
        {plants.map((plant) => (
          <div
            className="plant-card"
            key={plant.id}
            onClick={() => handleCardClick(plant)}
          >
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p className="price">₹{plant.price}</p>
             <p className="review-count">⭐ {plant.reviews} reviews</p>
            <button
              onClick={(e) => {
                e.stopPropagation(); // ⛔ prevents card click
                addToCart(plant);
              }}
            >
              Add to Cart
            </button>
              <button
            onClick={(e) => {
              e.stopPropagation();
              addToWishlist(plant);
            }}
          >
            ❤️ Wishlist
          </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowLight;
