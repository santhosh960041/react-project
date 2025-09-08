import React from "react";
import "./Seeds.css";
import { useCart } from "../CartContext";
import { useWishlist } from "../WishlistContext";
import { useNavigate } from "react-router-dom";

const seedsList = [
  {
    id: 1,
    name: "Sunflower Russian Giant - Desi Flower Seeds",
    price: 40,
    review: 340,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-seeds-sunflower-russian-giant-desi-flower-seeds-16969358606476_600x600.jpg?v=1634204992",
  },
  {
    id: 2,
    name: "Cherry Tomato - Vegetable Seeds",
    price: 30,
    review: 210,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-seeds-cherry-tomato-cherry-tomato-honey-vegetable-seeds-16969064743052_600x600.jpg?v=1634203536",
  },
  {
    id: 3,
    name: "Lavender - Flower Seeds",
    price: 50,
    review: 190,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-seeds-lavender-flower-seeds-16969077260428_600x600.jpg?v=1634204151",
  },
  {
    id: 4,
    name: "Rosemary - Herb Seeds",
    price: 45,
    review: 175,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-seeds-rosemary-herb-seeds-16969117466764_600x600.jpg?v=1634204791",
  },
  {
    id: 5,
    name: "Lemon Grass - Herb Seeds",
    price: 60,
    review: 265,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-seeds-lemon-grass-herb-seeds-16969077358732_600x600.jpg?v=1634204168",
  },
  {
    id: 6,
    name: "Vinca F1 Nana Black Purple - Flower Seeds",
    price: 35,
    review: 142,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-seeds-vinca-f1-nana-black-purple-flower-seeds-16969131229324_600x600.jpg?v=1634205222",
  },
  {
    id: 7,
    name: "Verbena Quartz Mixed Color - Flower Seeds",
    price: 25,
    review: 198,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-seeds-verbena-quartz-mixed-color-flower-seeds-16969128050828_600x600.jpg?v=1634205219",
  },
  {
    id: 8,
    name: "Gerbera Micro Mini Mixed Color - Flower Seeds",
    price: 55,
    review: 312,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-seeds-gerbera-micro-mini-mixed-color-flower-seeds-16969073918092_600x600.jpg?v=1634203962",
  },
  {
    id: 9,
    name: "Petunia Ultra Star - Flower Seeds",
    price: 42,
    review: 237,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-seeds-petunia-ultra-star-flower-seeds-16969109274764_600x600.jpg?v=1634204608",
  },
  {
    id: 10,
    name: "Chrysanthemum Alaska White - Flower Seeds",
    price: 38,
    review: 258,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-seeds-chrysanthemum-alaska-white-flower-seeds-16968784052364_600x600.jpg?v=1634203627",
  },
];

const Seeds = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleCardClick = (plant) => {
    navigate(`/plant/${plant.id}`, { state: plant });
  };

  return (
    <div className="seeds-container">
      <h2 className="page-title">🌱 Seeds</h2>
      <div className="seeds-grid">
        {seedsList.map((seed) => (
          <div
            className="seed-card"
            key={seed.id}
            onClick={() => handleCardClick(seed)}
          >
            <img src={seed.image} alt={seed.name} />
            <h3>{seed.name}</h3>
            <p className="price">₹{seed.price}</p>
            <p className="review">⭐ {seed.review} reviews</p>
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent card click
                addToWishlist(seed);
              }}
            >
              ❤️ Wishlist
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(seed);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seeds;
