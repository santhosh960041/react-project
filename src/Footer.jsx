import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Contact Info */}
        <div className="footer-column">
          <h2>🌵 Leafora</h2>
          <p>
            Leafora Plant Co.,<br />
            Green Valley Road, Urban Farm,<br />
            Tiruchirappalli, Tamil Nadu - 620001, India.
          </p>
          <p>📞 +91-9876543210</p>
          <p>Mon - Fri, 9:00 AM – 6:00 PM</p>

          {/* Social Media Icons with real or safe links */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Career</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/green-marketing">Green Marketing</Link></li>
            <li><Link to="/landscaping">Landscaping</Link></li>
            <li><Link to="/studio">NG Studio</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="footer-column">
          <h3>Help & Info</h3>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ's</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/shipping">Shipping & Returns</Link></li>
            <li><Link to="/store-locator">Store Locator</Link></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="footer-column">
          <h3>Sign up & Save</h3>
          <p>Subscribe to get special offers, free giveaways & once-in-a-lifetime deals.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
          <p className="ssl-secured">🔒 Fully Secured • SSL Checkout</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Leafora. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
