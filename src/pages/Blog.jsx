import React, { useState } from "react";
import "./blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Indoor Plants for Beginners",
    description:
      "Discover easy-to-care-for indoor plants perfect for beginners and busy lifestyles. These plants require minimal maintenance and thrive in low-light environments, making them ideal for homes and offices.",
    image:
      "https://www.gardendesign.com/pictures/images/320x320Exact_0x0/dream-team-s-portland-garden_6/beauty-star-calathea-calathea-ornata-pinstripe-calathea-proven-winners_17336.jpg",
  },
  {
    id: 2,
    title: "How to Keep Your Plants Healthy",
    description:
      "Learn essential tips to maintain lush and thriving greenery at home. Understand watering schedules, fertilizer usage, and sunlight needs to help your plants stay vibrant and strong.",
    image:
      "https://www.thrive.org.uk/files/images/Get-gardening/_hero/houseplant-watering-window.jpg",
  },
  {
    id: 3,
    title: "Best Air-Purifying Plants",
    description:
      "Clean your indoor air naturally with these powerful green companions. NASA studies show that certain houseplants can remove toxins and improve oxygen quality indoors.",
    image:
      "https://cdn.shopify.com/s/files/1/0019/5952/files/NASA_compiles_list_of_best_plants_to_clean_indoor_air.png?v=1751994614",
  },
  {
    id: 4,
    title: "Plant Care in Monsoon",
    description:
      "Discover how to avoid root rot and pest attacks during the rainy season. Tips include proper drainage, avoiding overwatering, and using natural pest repellents.",
    image:
      "https://bagiyaa.com/cdn/shop/articles/Monsoon_Gardening_Tips_How_to_Care_for_Plants_in_the_Rainy_Season.jpg?v=1726492945",
  },
  {
    id: 5,
    title: "DIY Plant Decor Ideas",
    description:
      "Creative ways to display your plants for beautiful indoor vibes. Use mason jars, recycled wood, and hanging shelves to showcase your green buddies in stylish ways.",
    image:
      "https://www.thespruce.com/thmb/cEjt1PmGtXtQULR7lJrHZJdmOoo=/3000x0/filters:no_upscale():max_bytes(150000):strip_icc()/increase-humidity-for-houseplants-1902801-6-eadf73df8284421ca827c073d8a43fd2.jpg",
  },
  {
    id: 6,
    title: "Common Mistakes in Plant Care",
    description:
      "Avoid these beginner mistakes and help your plants thrive. These include overwatering, wrong pot sizes, and ignoring pests until they spread.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYP97Qw6ht1KxVVpadkIlpoUbn_GOZAz-0M0LTZ8ljxm4tdc5FLkl4m7y7olyklW46spo&usqp=CAU",
  },
];

const Blog = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggleReadMore = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="blog-page">
      <h1 className="blog-heading"> E-Commuse Blog</h1>
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-desc">
              {expandedId === post.id
                ? post.description
                : `${post.description.slice(0, 80)}...`}
            </p>
            <button
              className="blog-read-more"
              onClick={() => handleToggleReadMore(post.id)}
            >
              {expandedId === post.id ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
