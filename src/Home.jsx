import React, { useState } from "react";
import "./home.css";

const backgrounds = [
  "https://media.istockphoto.com/id/1147472170/photo/hand-with-water-can-watering-indoor-plants-on-windowsill.jpg?s=612x612&w=0&k=20&c=ebhi3cBpN-2mdq7x2a_U1VcI6sdZ2uhJDv38Z0AJuYM=",
  "https://images.moneycontrol.com/static-mcnews/2024/10/20241012085326_ppants.jpg?impolicy=website&width=770&height=431",
 " https://hips.hearstapps.com/hmg-prod/images/collection-of-beautiful-houseplants-on-wooden-table-royalty-free-image-1712685460.jpg?crop=1xw:0.84415xh;0,0.195xh"

];

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);

  const handleChangeBackground = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  return (
    <div
      className="home-hero"
      style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
      onClick={handleChangeBackground}
    >
      <div className="hero-content">
        <h1 className="hero-title">🌵 Leafora</h1>
        <h2 className="hero-tagline">Grow Green. Live Clean.</h2>
        <p className="hero-subtext">Click anywhere to refresh the green vibes 🌿</p>
      </div>
    </div>
  );
};

export default Home;
