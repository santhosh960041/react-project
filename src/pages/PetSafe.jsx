import React from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../WishlistContext";
import "./PetSafe.css";

const petSafePlants = [
  {
    id: 1,
    name: "60 cm Spiral Stick Lucky Bamboo Plant",
    price: 499,
    reviews: 298,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-g-plant-lucky-bamboos-60-cm-spiral-sticks-lucky-bamboo-plant-167003_600x600.jpg?v=1679748522",
    description: "Areca Palm is pet-safe and helps purify indoor air."
  },
  {
    id: 2,
    name: "3 Layer Lucky Bamboo Plant in a Bowl with Pebbles",
    price: 299,
    reviews: 387,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-3-layer-lucky-bamboo-plant-in-a-bowl-with-pebbles-701159_600x600.jpg?v=1679748420",
    description: "Spider Plant is non-toxic and easy to grow."
  },
  {
    id: 3,
    name: "5 Lucky Bamboo Stalks (A Symbol of Positive Energy) - Gift Plant",
    price: 150,
    reviews: 198,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-5-lucky-bamboo-stalks-a-symbol-of-positive-energy-gift-plant-233809_600x600.jpg?v=1679748520",
    description: "Prayer Plant is colorful, pet-safe, and loves humidity."
  },
  {
    id: 4,
    name: "30 cm Spiral Stick Lucky Bamboo Plant - (Pack of 3)",
    price: 790,
    reviews: 198,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-g-30-cm-spiral-stick-lucky-bamboo-plant-pack-of-3_600x600.jpg?v=1637573984",
    description: "Boston Fern is lush, pet-friendly, and air-purifying."
  },
  {
    id: 5,
    name: "Yellow Bamboo - Plant",
    price: 549,
    reviews: 193,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-golden-bamboo-phyllostachys-aurea-plant_600x600.jpg?v=1634220529",
    description: "Bamboo Palm is tall, elegant, and non-toxic to pets."
  },
  {
    id: 6,
    name: "2 Lucky Bamboo Stalks (A Symbol of Love) - Gift Plant",
    price: 499,
    reviews: 123,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-plants-2-lucky-bamboo-stalks-a-symbol-of-love-gift-plant-16968448082060_600x600.jpg?v=1634207136",
    description: "Calathea has stunning leaves and is safe for pets."
  },
];

const PetSafe = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { addToWishlist } = useWishlist();

  const handleCardClick = (plant) => {
    navigate(`/plant/${plant.id}`, { state: plant }); // ✅ Opens PlantDetails page
  };

  return (
    <div className="petsafe-container">
      <h2 className="page-title">Bamboo Plants </h2>
      <div className="cards-grid">
        {petSafePlants.map((plant) => (
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
                e.stopPropagation(); // ⛔ prevent triggering card click
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

export default PetSafe;
