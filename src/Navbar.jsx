import React, { useState } from "react";
import { ShoppingCart, Menu, X, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; 
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { wishlist } = useWishlist();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo + Tagline */}
        <div className="logo-section">
          <Link to="/" className="navbar-logo">
            <span style={{ fontSize: "1.8rem" }}>🌵</span> <strong>Leafora</strong>
          </Link>
          <p className="navbar-tagline">Grow Green. Live Clean.</p>
        </div>

        {/* Desktop Links */}
        <ul className="navbar-links">
          <li className="dropdown">
            <span className="dropbtn">Plants ▾</span>
            <div className="dropdown-content">
              <Link to="/air-purifying">Air-Purifying</Link>
              <Link to="/low-light">Climber Plants</Link>
              <Link to="/pet-safe">Bamboo Plants</Link>
            </div>
          </li>
          <li><Link to="/seeds">Seeds</Link></li>
          <li><Link to="/plant-care">Plant Care</Link></li>

          <li className="dropdown">
            <span className="dropbtn">Pots ▾</span>
            <div className="dropdown-content">
              <Link to="/muds">Mud Pots</Link>
              <Link to="/plastic">Plastic Pots</Link>
            </div>
          </li>

          <li><Link to="/blog">Blog</Link></li>
        </ul>

        {/* Search Bar */}
        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search plants, seeds..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        {/* Icons */}
        <div className="navbar-icons">
          <Link to="/wishlist" className="wishlist-icon">
            <Heart />
            {wishlist.length > 0 && (
              <span className="wishlist-badge">{wishlist.length}</span>
            )}
          </Link>

          <Link to="/cart" className="cart-icon">
            <ShoppingCart />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>

          <Link to="/login" className="login-btn">Login</Link>

          {/* Mobile Menu Toggle */}
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/air-purifying">Air-Purifying</Link>
          <Link to="/low-light">Climber Plants</Link>
          <Link to="/pet-safe">Bamboo Plants</Link>
          <Link to="/seeds">Seeds</Link>
          <Link to="/plant-care">Plant Care</Link>
          <Link to="/muds">Mud Pots</Link>
          <Link to="/plastic">Plastic Pots</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
