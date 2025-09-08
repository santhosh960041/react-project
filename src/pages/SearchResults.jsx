import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const pageMapping = {
  "seeds": "/seeds",
  "plant care": "/plant-care",
  "plantcare": "/plant-care",
  "air-purifying": "/air-purifying",
  "air purifying": "/air-purifying",
  "low-light": "/low-light",
  "low light": "/low-light",
  "pet-safe": "/pet-safe",
  "pet safe": "/pet-safe",
  "plants": "/air-purifying", // or set a landing page for all plants
  "pots": "/muds",            // default to mud pots or create a /pots overview
  "mud pots": "/muds",
  "plastic pots": "/plastic",
  "blog": "/blog"
};

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query")?.toLowerCase();
    setSearchQuery(query);

    if (query && pageMapping[query]) {
      navigate(pageMapping[query]);
    }
  }, [location.search, navigate]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>🔍 Searching for: <i>{searchQuery}</i></h2>
      <p>No direct match found. Try a category like <strong>"Seeds"</strong>, <strong>"Plant Care"</strong>, or <strong>"Pots"</strong>.</p>
    </div>
  );
};

export default SearchResults;
