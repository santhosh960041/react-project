import React from "react";
import { useWishlist } from "./WishlistContext";
import './like.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h2>❤️ Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
