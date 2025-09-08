import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; // ✅ Import Footer

// Pages
import Home from "./Home";
import AirPurifying from "./pages/AirPurifying";
import LowLight from "./pages/LowLight";
import PetSafe from "./pages/PetSafe";
import Seeds from "./pages/Seeds";
import PlantCare from "./pages/PlantCare";
import Muds from "./pages/Muds";
import Plastic from "./pages/Plastic";
import Blog from "./pages/Blog";
import Cart from "./Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SearchResults from "./pages/SearchResults";
import Wishlist from "./Wishlist";
import PlantDetails from "./pages/PlantDetails";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/air-purifying" element={<AirPurifying />} />
          <Route path="/low-light" element={<LowLight />} />
          <Route path="/pet-safe" element={<PetSafe />} />
          <Route path="/seeds" element={<Seeds />} />
          <Route path="/plant-care" element={<PlantCare />} />
          <Route path="/muds" element={<Muds />} />
          <Route path="/plastic" element={<Plastic />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/plant/:id" element={<PlantDetails />} />
        </Routes>
        
        <Footer /> {/* ✅ Footer placed outside <Routes> so it's visible on all pages */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
