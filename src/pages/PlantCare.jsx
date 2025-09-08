import React from "react";
import "./PlantCare.css";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../WishlistContext";

const plantCareItems = [
  {
    id: 1,
    name: "Coco Peat Block - 4 kg (Expands Up to 60 - 70 L)",
    price: 199,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-soil-and-fertilizers-coco-peat-block-5-kg-16968789885068_600x600.jpg?v=1634216406",
  },
  {
    id: 2,
    name: "Coco peat block - 600 g (Expands Up to 5 - 8 L)",
    price: 149,
    image: "https://nurserylive.com/cdn/shop/files/nurserylive-pune-coco-peat-block-900-g-expands_869x869.jpg?v=1712755587",
  },
  {
    id: 3,
    name: "Coco Husk Block - 4.5 kg",
    price: 299,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-soil-and-fertilizers-coco-husk-block-4-5-kg-16968789753996_600x600.jpg?v=1634216398",
  },
  {
    id: 4,
    name: "Potting Soil Mix for Flowering Plants - 5 kg",
    price: 99,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-soil-and-fertilizers-potting-soil-mix-for-flowering-plants-5-kg-16969330360460_869x869.jpg?v=1634226780",
  },
  {
    id: 5,
    name: "General Purpose Garden Potting Soil Mix - 5 kg",
    price: 89,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-soil-and-fertilizers-general-purpose-garden-potting-soil-mix-5-kg-16968874164364_869x869.jpg?v=1634220123",
  },
  {
    id: 6,
    name: "Nutrient-rich general purpose potting soil mix - 5 kg",
    price: 60,
    image: "https://nurserylive.com/cdn/shop/products/nurserylive-soil-and-fertilizers-nutrient-rich-general-purpose-potting-soil-mix-5-kg-16969046098060_600x600.jpg?v=1634224986",
  },
  {
    id: 7,
    name: "Cocopeat Seedling Coin",
    price: 180,
    image: "https://www.urbanplant.in/cdn/shop/files/Product4-01.webp?v=1708977531&width=1200",
  },
  {
    id: 8,
    name: "Cocopeat Seedling Coin - (with Plug)",
    price: 120,
    image: "https://www.urbanplant.in/cdn/shop/files/cocopeat_with_plug_10pcs.webp?v=1707753498&width=1200",
  },
];

const PlantCare = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleCardClick = (plant) => {
    navigate(`/plant/${plant.id}`, { state: plant });
  };

  return (
    <div className="plantcare-container">
      <h2 className="page-title">🧪 Plant Care Essentials</h2>
      <div className="plantcare-grid">
        {plantCareItems.map((item) => (
          <div
            key={item.id}
            className="plantcare-card"
            onClick={() => handleCardClick(item)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">₹{item.price}</p>
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
    </div>
  );
};

export default PlantCare;
