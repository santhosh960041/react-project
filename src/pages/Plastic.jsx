import React from "react";
import { useCart } from "../CartContext";
import { useWishlist } from "../WishlistContext";
import { useNavigate } from "react-router-dom";
import "./Plastic.css";

const plasticPots = [
  {
    id: 1,
    name: "5.1 inch (13 cm) Round Plastic Thermoform Pot (Mix Color) - Pack of 20",
    price: 79,
    reviews:340,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-pots-5-1-inch-13-cm-round-thermoform-pot-mix-color-pack-of-twenty-16968498217100_600x600.jpg?v=1634209367",
  },
  {
    id: 2,
    name: "4.5 inch (11 cm) Ronda No. 1110 Round Plastic Planter",
    price: 99,
    reviews:400,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-4-5-inch-11-cm-ronda-no-1110-round-plastic-planter-set-of-6-white_600x600.jpg?v=1687863829",
  },
  {
    id: 3,
    name: "23.6 inch (60 cm) Rectangle Plastic Microgreens Tray (3 mm) (Set of 2)",
    price: 199,
    reviews:980,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-rectangle-plastice-microgreens-tray-pack-of-2_600x600.jpg?v=1634207344",
  },
  {
    id: 4,
    name: "5.7 inch (14 cm) Ronda No. 14.5 Round Plastic Planter (Mix Color) - Pack of 6",
    price: 129,
    reviews:130,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-pots-5-7-inch-14-cm-ronda-no-14-5-round-plastic-planter-mix-color-pack-of-six-16968507490444_600x600.jpg?v=1634209711",
  },
  {
    id: 5,
    name: "6.6 inch (17 cm) Tulsi Vrindavan Matt Finish Rectangle Ceramic Pot (Light Brown)",
    price: 89,
    reviews:690,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-planters-6-6-inch-17-cm-tulsi-vrindavan-matt-finish-rectangle-ceramic-pot-light-brown-16968519417996_600x600.jpg?v=1634209986",
  },
  {
    id: 6,
    name: "3 inch (8 cm) Handi Shape Round Ceramic Pots - Pack of 5",
    price: 149,
    reviews:450,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-pots-3-inch-8-cm-handi-shape-round-ceramic-pots-pack-of-five-16968466235532_600x600.jpg?v=1634208196",
  },
  {
    id: 7,
    name: "11.8 inch (30 cm) Bello Window Planter No. 30 Rectangle Plastic Pot (Black) (set of 6)",
    price: 179,
    reviews:780,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-planters-11-8-inch-30-cm-bello-window-planter-no-30-rectangle-plastic-pot-black-16968385495180_600x600.jpg?v=1634205692",
  },
  {
    id: 8,
    name: "18 inch (46 cm) Rectangle Grow Bag (Green) (set of 5)  .",
    price: 159,
    reviews:230,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-planters-18-inch-46-cm-rectangle-grow-bag-green-16968438939788_600x600.jpg?v=1634207009",
  },
];

const Plastic = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleCardClick = (plant) => {
    navigate(`/plant/${plant.id}`, { state: plant });
  };

  return (
    <div className="plastic-container">
      <h2 className="page-title">🪴 Plastic Pots</h2>
      <div className="cards-grid">
        {plasticPots.map((pot) => (
          <div
            className="plant-card"
            key={pot.id}
            onClick={() => handleCardClick(pot)}
          >
            <img src={pot.image} alt={pot.name} />
            <h3>{pot.name}</h3>
            <p className="price">₹{pot.price}</p>
            <p className="review-count">⭐ {pot.reviews} reviews</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToWishlist(pot);
              }}
            >
              ❤️ Wishlist
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(pot);
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

export default Plastic;
