import React from "react";
import { useCart } from "../CartContext";
import { useWishlist } from "../WishlistContext";
import { useNavigate } from "react-router-dom";
import "./airpurifying.css"; // Optional CSS file for styling

const AirPurifying = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Peace Lily, Spathiphyllum - Plant",
      price: 299,
      image: "https://nurserylive.com/cdn/shop/products/nurserylive-peace-lily-spathiphyllum-plant-in-4-inch-10-cm-black-pot-230563_600x600.jpg?v=1751715660",
      reviews: 120,
      description: "The Snake Plant is known for its air-purifying abilities.",
    },
    {
      id: 2,
      name: "Syngonium (Pink) - Plant",
      price: 349,
      image: "https://nurserylive.com/cdn/shop/products/nurserylive-syngonium-pink-plant-in-4-inch-10-cm-black-pot-188185_600x600.jpg?v=1751717588",
      reviews: 846,
      description: "The Peace Lily is an elegant air-purifying plant.",
    },
    {
      id: 3,
      name: "Chlorophytum, Spider Plant - Plant",
      price: 249,
      image: "https://nurserylive.com/cdn/shop/files/spider-plant_e45f05e5-e27c-49fb-b24d-a12b47c688f0_600x600.jpg?v=1751755176",
      reviews: 302,
      description: "Spider Plants are easy to grow and clean indoor air.",
    },
    {
      id: 4,
      name: "Money plant marble prince, Scindapsus n joy - Plant",
      price: 399,
      image: "https://nurserylive.com/cdn/shop/products/nurserylive-money-plant-marble-prince-scindapsus-n-joy-plant-in-4-inch-10-cm-black-pot-368431_600x600.jpg?v=1751715348",
      reviews: 198,
      description: "Areca Palm adds tropical charm and purifies air.",
    },
    {
      id: 5,
      name: "Top 5 air purifier and oxygen enriching plant pack",
      price: 1299,
      image: "https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-top-5-air-purifier-and-oxygen-enriching-plant-pack-16969387507852_600x600.jpg?v=1634230232",
      reviews: 175,
      description: "Rubber Plants are hardy and clean toxins from the air.",
    },
    {
      id: 6,
      name: "Money Plant, Scindapsus (Green) - Plant",
      price: 279,
      image: "https://nurserylive.com/cdn/shop/products/nurserylive-money-plant-scindapsus-green-plant-in-4-inch-10-cm-black-pot-224662_600x600.jpg?v=1751715547",
      reviews: 210,
      description: "A lush plant that loves humidity and purifies air.",
    },
    {
      id: 7,
      name: "Sansevieria trifasciata Hahnii, Snake Plant - Plant",
      price: 359,
      image: "https://nurserylive.com/cdn/shop/products/nurserylive-plants-sansevieria-trifasciata-hahnii-snake-plant-plant-16969295855756_600x600.jpg?v=1751717735",
      reviews: 155,
      description: "Low-maintenance ZZ Plant improves indoor air quality.",
    },
    {
      id: 8,
      name: "Aglaonema siam aurora, Aglaonema lipstick - Plant",
      price: 289,
      image: "https://nurserylive.com/cdn/shop/products/nurserylive-aglaonema-siam-aurora-aglaonema-lipstick-plant-in-4-inch-10-cm-black-pot-200526_600x600.jpg?v=1685017885",
      reviews: 134,
      description: "A stylish plant that thrives in low light and purifies air.",
    },
  ];

  const handleCardClick = (plant) => {
    navigate(`/plant/${plant.id}`, { state: plant });
  };

  return (
    <div className="plant-grid">
      {products.map((item) => (
        <div
          key={item.id}
          className="plant-card"
          onClick={() => handleCardClick(item)}
        >
          <img src={item.image} alt={item.name} className="plant-image" />
          <h3>{item.name}</h3>
          <p className="price">₹{item.price}</p>
          <p className="review-count">⭐ {item.reviews} reviews</p>
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
      ))}
    </div>
  );
};

export default AirPurifying;
